import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // OAuth 콜백 후 세션이 설정될 때까지 대기
    const timer = setTimeout(() => {
      if (user) {
        // 로그인 성공 시 홈페이지로 리다이렉트
        navigate('/');
      } else {
        // 로그인 실패 시 로그인 페이지로
        navigate('/login');
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-green-light/10">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🌰</span>
        </div>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-lg text-muted-foreground">Signing you in...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
