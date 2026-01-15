import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import { AuthProvider } from '@/contexts/AuthContext';
import '@testing-library/jest-dom';

// Mock Supabase
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
      signInWithOAuth: vi.fn(),
      getSession: vi.fn(() => Promise.resolve({ data: { session: null } })),
      onAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: vi.fn() } },
      })),
    },
  },
}));

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
    },
  }),
}));

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <AuthProvider>{component}</AuthProvider>
    </BrowserRouter>
  );
};

describe('Signup Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders signup form', () => {
    renderWithProviders(<Signup />);
    
    expect(screen.getByLabelText(/auth.email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^auth.password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/auth.confirmPassword/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /auth.signup.button/i })).toBeInTheDocument();
  });

  it('displays OAuth buttons', () => {
    renderWithProviders(<Signup />);
    
    expect(screen.getByText(/auth.continueWithGoogle/i)).toBeInTheDocument();
    expect(screen.getByText(/auth.continueWithGithub/i)).toBeInTheDocument();
  });

  it('validates password requirements', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Signup />);
    
    const emailInput = screen.getByLabelText(/auth.email/i);
    const passwordInput = screen.getByLabelText(/^auth.password$/i);
    const submitButton = screen.getByRole('button', { name: /auth.signup.button/i });
    
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'weak');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Password must be at least 8 characters/i)).toBeInTheDocument();
    });
  });

  it('validates password confirmation match', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Signup />);
    
    const emailInput = screen.getByLabelText(/auth.email/i);
    const passwordInput = screen.getByLabelText(/^auth.password$/i);
    const confirmPasswordInput = screen.getByLabelText(/auth.confirmPassword/i);
    const submitButton = screen.getByRole('button', { name: /auth.signup.button/i });
    
    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'StrongPass123');
    await user.type(confirmPasswordInput, 'DifferentPass123');
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Passwords don't match/i)).toBeInTheDocument();
    });
  });

  it('has link to login page', () => {
    renderWithProviders(<Signup />);
    
    const loginLink = screen.getByText(/auth.loginLink/i);
    expect(loginLink).toBeInTheDocument();
    expect(loginLink.closest('a')).toHaveAttribute('href', '/login');
  });
});
