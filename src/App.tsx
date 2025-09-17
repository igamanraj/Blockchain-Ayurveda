import React from 'react';
import { 
  Leaf, 
  Shield, 
  Smartphone, 
  QrCode, 
  FileCheck, 
  TreePine,
  MapPin,
  Microscope,
  Database,
  Scan,
  User,
  DollarSign,
  Factory,
  FlaskConical,
  ShoppingCart,
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">HerbTrace</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <a href="#impact" className="text-gray-700 hover:text-green-600 transition-colors">Impact</a>
              <a href="#demo" className="text-gray-700 hover:text-green-600 transition-colors">Demo</a>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              <span>Blockchain-Powered Authenticity</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              From Farm to Formula: 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Trusted Traceability
              </span> 
              for Ayurvedic Herbs
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              A blockchain-based system ensuring authenticity, sustainability, and transparency 
              in Ayurvedic herb sourcing from harvest to consumer.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                <span>Explore the Solution</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-50 transition-all duration-200 flex items-center space-x-2">
                <QrCode className="h-5 w-5" />
                <span>Scan a QR Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Features for Ayurvedic Supply Chain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive blockchain solution addressing every aspect of herb traceability and authenticity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Traceability</h3>
              <p className="text-gray-600 leading-relaxed">
                Immutable blockchain records from geo-tagged harvest locations to final product delivery, ensuring complete transparency.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Contracts</h3>
              <p className="text-gray-600 leading-relaxed">
                Automated validation of geo-fencing, seasonal harvesting rules, and quality checks through intelligent contracts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Farmer-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Mobile DApp with SMS support for rural collectors, featuring offline capabilities and intuitive interface.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <QrCode className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consumer Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                QR code scanning reveals complete origin story, lab results, and sustainability certifications instantly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined certification process aligned with AYUSH and NMPB guidelines for seamless regulatory approval.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TreePine className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Prevents over-harvesting through smart monitoring and promotes biodiversity conservation initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our System Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless five-step process ensuring complete transparency from farm to pharmacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">01</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Geo-Tagged Collection</h3>
              <p className="text-gray-600 text-sm">Farmers collect herbs using GPS-enabled mobile app with precise location data</p>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">02</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Processing & Testing</h3>
              <p className="text-gray-600 text-sm">Labs and processors add comprehensive quality and handling data to records</p>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-2">03</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Blockchain Ledger</h3>
              <p className="text-gray-600 text-sm">Every step permanently recorded on immutable blockchain infrastructure</p>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <QrCode className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">04</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smart QR Label</h3>
              <p className="text-gray-600 text-sm">Unique verification code generated for each batch and product</p>
            </div>

            <div className="text-center group">
              <div className="bg-white p-6 rounded-2xl shadow-md mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scan className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-2xl font-bold text-indigo-600 mb-2">05</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Consumer Scan</h3>
              <p className="text-gray-600 text-sm">Customers verify authenticity and access complete product history instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transforming the Entire Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating value and trust for every stakeholder in the Ayurvedic supply chain
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <User className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Farmers</h3>
              </div>
              <p className="text-gray-600 mb-4">Fair pricing through transparency and direct recognition for quality cultivation practices.</p>
              <div className="flex items-center text-green-600 font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Enhanced Income & Recognition</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Factory className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Manufacturers</h3>
              </div>
              <p className="text-gray-600 mb-4">Streamlined compliance processes and enhanced export readiness with verified documentation.</p>
              <div className="flex items-center text-blue-600 font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Export Ready & Compliant</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <FlaskConical className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Regulators</h3>
              </div>
              <p className="text-gray-600 mb-4">Real-time monitoring capabilities with comprehensive audit trails for enforcement.</p>
              <div className="flex items-center text-purple-600 font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Real-time Oversight</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <ShoppingCart className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Consumers</h3>
              </div>
              <p className="text-gray-600 mb-4">Access to authentic, safe, and sustainable products with complete transparency.</p>
              <div className="flex items-center text-orange-600 font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Trusted Authentic Products</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <Globe className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Environment</h3>
              </div>
              <p className="text-gray-600 mb-4">Active conservation of biodiversity through sustainable harvesting practices.</p>
              <div className="flex items-center text-green-600 font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Biodiversity Conservation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Star className="h-4 w-4" />
                  <span>Live Pilot Program</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  First Pilot Species: Ashwagandha
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Experience our complete traceability system with <em>Withania somnifera</em> - from collection to consumer scan.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Track a Herb's Complete Journey</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Geo-tagged harvest location in Rajasthan</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Quality testing and processing records</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Sustainability and fair trade certification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span>Final product verification and authenticity</span>
                    </li>
                  </ul>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <QrCode className="h-5 w-5" />
                    <span>Try Live Demo</span>
                  </button>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
                  <div className="bg-white w-32 h-32 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    <QrCode className="h-16 w-16 text-gray-600" />
                  </div>
                  <p className="text-gray-600 mb-4">Scan this QR code to explore a sample Ashwagandha batch journey</p>
                  <div className="text-sm text-gray-500">
                    Batch ID: ASH-2024-001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Trust in Ayurveda with Technology
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join the revolution in Ayurvedic supply chain transparency. Be part of a sustainable future 
            where authenticity and quality are guaranteed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <span>Join the Pilot</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 flex items-center space-x-2">
              <span>Request a Demo</span>
            </button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-green-100">Farmers Connected</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Batches Tracked</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Manufacturers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-green-100">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="text-xl font-bold">HerbTrace</span>
              </div>
              <p className="text-gray-400 mb-4">
                Blockchain + Ayurveda = Transparency, Sustainability, Trust.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Solution</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 HerbTrace. All rights reserved. Building trust through transparency.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
