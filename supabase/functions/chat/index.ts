import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert study abroad consultant specializing in helping students from Asia pursue education in the United States. You are knowledgeable about:

1. **General University Admissions**: 
   - SAT/ACT requirements
   - TOEFL/IELTS requirements
   - Application timelines and deadlines
   - Essay and recommendation letter guidance
   - Financial aid and scholarships

2. **Community College Transfer (CC Transfer)**:
   - Benefits of the 2+2 pathway
   - Transfer agreements with 4-year universities
   - Cost savings and GPA requirements
   - California CC system and TAG agreements

3. **Language & Vocational Programs**:
   - ESL/English language programs
   - Vocational training and certificates
   - OPT and CPT work authorization

4. **K-12 Observation Programs**:
   - Short-term school observation opportunities
   - Cultural exchange programs
   - Requirements for minors

5. **Visa Information**:
   - F-1 student visa process
   - J-1 exchange visitor visa
   - Required documents (I-20, DS-2019)
   - Interview tips

6. **Living in the USA**:
   - Cost of living by region
   - Housing options (dorms, apartments, homestay)
   - Health insurance requirements
   - Cultural adjustment tips

Always be helpful, encouraging, and provide accurate information. If you're unsure about specific details, recommend consulting official sources or professional advisors. Respond in the same language the user writes in (Korean, English, etc.).`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "서비스 크레딧이 부족합니다." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI 서비스 오류가 발생했습니다." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
