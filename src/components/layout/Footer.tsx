import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold">Study in Korea</span>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              한국유학 종합정보시스템
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">대학검색</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">학과검색</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">장학금정보</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">온라인원서접수</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">도움말</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">1:1 문의</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">가이드북</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">문의하기</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1577-0505</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>studyinkorea@korea.kr</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>세종특별자치시 갈매로 408 정부세종청사 14동</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© 2024 Study in Korea. All rights reserved.</p>
          <p className="mt-2">교육부 국립국제교육원</p>
        </div>
      </div>
    </footer>
  );
};
