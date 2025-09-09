import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Admin {
  id: string;
  email: string;
  name: string;
  role: 'admin';
}

interface AdminContextType {
  admin: Admin | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

// Mock admin credentials - in production, this would be handled by a secure backend
const ADMIN_CREDENTIALS = {
  email: 'admin@flameguard.com',
  password: 'admin123'
};

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored admin session
    const storedAdmin = localStorage.getItem('flameguard_admin');
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      // Mock authentication - replace with real admin auth
      if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        const mockAdmin: Admin = {
          id: 'admin-1',
          email,
          name: 'FlameGuard Admin',
          role: 'admin'
        };
        setAdmin(mockAdmin);
        localStorage.setItem('flameguard_admin', JSON.stringify(mockAdmin));
      } else {
        throw new Error('Invalid admin credentials');
      }
    } catch (error) {
      throw new Error('Admin login failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('flameguard_admin');
  };

  const value = {
    admin,
    login,
    logout,
    loading
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};