@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import { AuthProvider } from './contexts/AuthContext';
+import { AdminProvider } from './contexts/AdminContext';
 import { CartProvider } from './contexts/CartContext';
 import Navbar from './components/Navbar';
 import Footer from './components/Footer';
+import AdminLayout from './components/AdminLayout';
 import Home from './pages/Home';
 import Login from './pages/Login';
 import Signup from './pages/Signup';
@@ .. @@
 import Profile from './pages/Profile';
 import FAQ from './pages/FAQ';
 import ProtectedRoute from './components/ProtectedRoute';
+import AdminRoute from './components/AdminRoute';
+import AdminLogin from './pages/admin/AdminLogin';
+import AdminDashboard from './pages/admin/AdminDashboard';
+import AdminProducts from './pages/admin/AdminProducts';
+import AdminCustomers from './pages/admin/AdminCustomers';
+import AdminOrders from './pages/admin/AdminOrders';
+import AdminAnalytics from './pages/admin/AdminAnalytics';
+import AdminSettings from './pages/admin/AdminSettings';
 
 function App() {
   return (
     <AuthProvider>
-      <CartProvider>
-        <Router>
-          <div className="min-h-screen bg-gray-50 flex flex-col">
-            <Navbar />
-            <main className="flex-grow">
-              <Routes>
-                <Route path="/" element={<Home />} />
-                <Route path="/login" element={<Login />} />
-                <Route path="/signup" element={<Signup />} />
-                <Route path="/products" element={<ProductCatalog />} />
-                <Route path="/products/:id" element={<ProductDetail />} />
-                <Route path="/cart" element={<Cart />} />
-                <Route path="/checkout" element={
-                  <ProtectedRoute>
-                    <Checkout />
-                  </ProtectedRoute>
-                } />
-                <Route path="/orders/:id" element={
-                  <ProtectedRoute>
-                    <OrderTracking />
-                  </ProtectedRoute>
-                } />
-                <Route path="/profile" element={
-                  <ProtectedRoute>
-                    <Profile />
-                  </ProtectedRoute>
-                } />
-                <Route path="/faq" element={<FAQ />} />
-              </Routes>
-            </main>
-            <Footer />
-          </div>
-        </Router>
-      </CartProvider>
+      <AdminProvider>
+        <CartProvider>
+          <Router>
+            <Routes>
+              {/* Admin Routes */}
+              <Route path="/admin/login" element={<AdminLogin />} />
+              <Route path="/admin/*" element={
+                <AdminRoute>
+                  <AdminLayout>
+                    <Routes>
+                      <Route path="dashboard" element={<AdminDashboard />} />
+                      <Route path="products" element={<AdminProducts />} />
+                      <Route path="customers" element={<AdminCustomers />} />
+                      <Route path="orders" element={<AdminOrders />} />
+                      <Route path="analytics" element={<AdminAnalytics />} />
+                      <Route path="settings" element={<AdminSettings />} />
+                    </Routes>
+                  </AdminLayout>
+                </AdminRoute>
+              } />
+              
+              {/* Public Routes */}
+              <Route path="/*" element={
+                <div className="min-h-screen bg-gray-50 flex flex-col">
+                  <Navbar />
+                  <main className="flex-grow">
+                    <Routes>
+                      <Route path="/" element={<Home />} />
+                      <Route path="/login" element={<Login />} />
+                      <Route path="/signup" element={<Signup />} />
+                      <Route path="/products" element={<ProductCatalog />} />
+                      <Route path="/products/:id" element={<ProductDetail />} />
+                      <Route path="/cart" element={<Cart />} />
+                      <Route path="/checkout" element={
+                        <ProtectedRoute>
+                          <Checkout />
+                        </ProtectedRoute>
+                      } />
+                      <Route path="/orders/:id" element={
+                        <ProtectedRoute>
+                          <OrderTracking />
+                        </ProtectedRoute>
+                      } />
+                      <Route path="/profile" element={
+                        <ProtectedRoute>
+                          <Profile />
+                        </ProtectedRoute>
+                      } />
+                      <Route path="/faq" element={<FAQ />} />
+                    </Routes>
+                  </main>
+                  <Footer />
+                </div>
+              } />
+            </Routes>
+          </Router>
+        </CartProvider>
+      </AdminProvider>
     </AuthProvider>
   );
 }