import React, { useState, useEffect } from 'react';
import { Building2, Microscope, PenTool as Tools, Scale, Lightbulb, FileSpreadsheet, Mail, Phone, User, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  { 
    icon: Building2, 
    title: 'CONSULTORIA', 
    description: 'Assessoria especializada para sua indústria',
    details: [
      'Diagnóstico empresarial completo',
      'Análise de processos industriais',
      'Otimização de produção',
      'Consultoria em gestão industrial',
      'Implementação de melhorias contínuas'
    ]
  },
  { 
    icon: Microscope, 
    title: 'PESQUISA, DESENVOLVIMENTO E INOVAÇÃO', 
    description: 'Soluções tecnológicas para seu negócio',
    details: [
      'Desenvolvimento de novos produtos',
      'Pesquisa aplicada',
      'Prototipagem rápida',
      'Testes e validações',
      'Inovação em processos'
    ]
  },
  { 
    icon: Tools, 
    title: 'FERRAMENTARIA E SERVIÇOS OPERACIONAIS', 
    description: 'Suporte técnico e operacional',
    details: [
      'Fabricação de ferramentas especiais',
      'Manutenção industrial',
      'Calibração de equipamentos',
      'Automação de processos',
      'Suporte técnico especializado'
    ]
  },
  { 
    icon: Scale, 
    title: 'METROLOGIA / QUÍMICA', 
    description: 'Análises e medições precisas',
    details: [
      'Análises químicas',
      'Ensaios mecânicos',
      'Calibração de instrumentos',
      'Medições dimensionais',
      'Laudos técnicos'
    ]
  },
  { 
    icon: Lightbulb, 
    title: 'HABITAT DE INOVAÇÃO', 
    description: 'Ambiente propício para inovação',
    details: [
      'Espaço colaborativo',
      'Mentoria especializada',
      'Networking industrial',
      'Acesso a laboratórios',
      'Eventos de inovação'
    ]
  },
  { 
    icon: FileSpreadsheet, 
    title: 'CAPTAÇÃO DE RECURSOS', 
    description: 'Elaboração e gestão de projetos',
    details: [
      'Identificação de editais',
      'Elaboração de projetos',
      'Gestão de recursos',
      'Prestação de contas',
      'Acompanhamento de resultados'
    ]
  },
];

const testimonials = [
  {
    company: 'Indústria ABC',
    logo: 'https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?auto=format&fit=crop&q=80&w=100&h=100',
    text: 'O SENAI foi fundamental para nossa expansão tecnológica.'
  },
  {
    company: 'Metalúrgica XYZ',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=100&h=100',
    text: 'Através dos editais, conseguimos modernizar nosso parque industrial.'
  },
];

const partners = [
  {
    name: 'Arcelor Mittal',
    logo: 'https://cestapp.angraz.com.br/fomenta/arcelo.png?'
  },
  {
    name: 'B&Q',
    logo: 'https://cestapp.angraz.com.br/fomenta/beq.png'
  },
  {
    name: 'M.Dias Branco',
    logo: 'https://cestapp.angraz.com.br/fomenta/mdias.png'
  },
  {
    name: 'Sou Energy',
    logo: 'https://cestapp.angraz.com.br/fomenta/sou.png'
  },

];

const carouselImages = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
  'https://images.pexels.com/photos/162529/grinder-hitachi-power-tool-flexible-162529.jpeg',
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=1200',
];

function ServiceCard({ service, isExpanded, onClick }) {
  return (
    <div 
      className={`p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer
        ${isExpanded ? 'scale-105 bg-white' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <service.icon className={`w-12 h-12 mb-4 transition-colors ${isExpanded ? 'text-green-600' : 'text-blue-600'}`} />
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-gray-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <hr className="my-4" />
        <ul className="space-y-2">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleServiceClick = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center">
        <img src="https://cestapp.angraz.com.br/fomenta/fomentalogo.png"  alt="Logo 🚀" className="h-12" />
      </div>
    </header>


      {/* Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Industrial Scene ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Impulsionando a Indústria do Futuro</h2>
            <p className="text-xl">Desenvolvemos Soluções para a indústria através da tecnológia e inovação</p>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">ÁREAS E SERVIÇOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isExpanded={expandedService === index}
                onClick={() => handleServiceClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

    {/* Seção de Destaque com Imagem Fixa */}
    <section 
      className="relative h-[400px] flex items-center justify-center text-center text-white"
      style={{ 
        backgroundImage: "url('https://cestapp.angraz.com.br/fomenta/hero-background.png?auto=format&fit=crop&q=80&w=1600')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 px-6">
        <h2 className="text-4xl font-bold mb-4">Soluções para maior competitividade, saúde e segurança na indústria</h2>
        <p className="text-lg max-w-2xl mx-auto">
          A Plataforma de Inovação para a Indústria financia o desenvolvimento de tecnologias, processos, produtos e serviços para a maior eficiência e produtividade do setor industrial
        </p>
        {/* A inovação e a tecnologia são os motores da evolução industrial. */}
      </div>
    </section>

    <section className="py-16 bg-blue-100">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
    {/* Texto principal */}
    <div>
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Quem pode participar</h2>
      <p className="text-gray-700 mb-8">
        Empresas do setor industrial de todos os tamanhos.
      </p>

      <h2 className="text-2xl font-bold text-blue-900 mb-4">Como participar</h2>
      <p className="text-gray-700 mb-8">
        <span className="font-semibold">As regras e cronogramas variam de acordo com o edital de cada categoria.</span> Para participar, é necessário realizar a inscrição e apresentar detalhes da ideia para cada projeto.
      </p>

      <h2 className="text-2xl font-bold text-blue-900 mb-4">Desenvolvimento de projetos</h2>
      <p className="text-gray-700 mb-4">As ideias serão desenvolvidas pelos:</p>
      <ul className="text-gray-700 list-disc pl-5">
        <li>Institutos SENAI de Inovação</li>
        <li>Institutos SENAI de Tecnologia</li>
        <li>Centros de Inovação SESI</li>
        <li>Empresas selecionadas em cada categoria</li>
      </ul>
    </div>

    {/* Card de investimento */}
    <div className="bg-white shadow-lg rounded-xl p-6">
      <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
        💰 Recurso Financeiro 
      </h3>
      <p className="text-gray-600 mt-1">A Plataforma já investiu</p>
      <p className="text-5xl font-bold text-blue-900 mt-4">R$ 1,10 bilhão 🚀</p>

      <div className="bg-blue-200 text-blue-900 p-3 rounded-md mt-4 text-sm">
        Os recursos serão administrados por uma unidade do <strong>SENAI</strong> ou <strong>SESI</strong>.
      </div>
      <p className="text-gray-500 text-xs mt-2">Os valores podem sofrer alterações</p>
    </div>
  </div>
</section>



      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de Sucesso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <h3 className="text-xl font-semibold">{testimonial.company}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Partners Section */}
<section className="py-16 bg-blue-500">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">Empresas Parceiras</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {partners.map((partner, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex items-center justify-center w-32 h-32 bg-blue-500 rounded-lg shadow-md p-2">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-auto h-auto max-w-full max-h-28 object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold text-center text-white">{partner.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Contact Form */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Telefone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Fomenta SENAI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;