import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { name: "Дизайн", icon: "Palette" },
    { name: "Искусство", icon: "Lightbulb" },
    { name: "Фотография", icon: "Camera" },
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "Минимализм в современном дизайне",
      category: "Дизайн",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/87633031-1538-4c60-b1bb-4c76f4d6f1db.jpg",
      excerpt: "Исследуем принципы минимализма и их влияние на современную визуальную культуру",
      date: "21 октября 2025",
    },
    {
      id: 2,
      title: "Творческое пространство художника",
      category: "Искусство",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/a452cd50-8dcd-4d62-9ff7-e2f260e3ff99.jpg",
      excerpt: "Как организовать студию для максимальной продуктивности и вдохновения",
      date: "20 октября 2025",
    },
    {
      id: 3,
      title: "Абстракция в фотографии",
      category: "Фотография",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/3b8b9e0b-9b5c-4503-a216-46029fba4afc.jpg",
      excerpt: "Техники создания абстрактных композиций через объектив камеры",
      date: "19 октября 2025",
    },
  ];

  const recentArticles = [
    {
      id: 4,
      title: "Цветовая психология в брендинге",
      category: "Дизайн",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/87633031-1538-4c60-b1bb-4c76f4d6f1db.jpg",
      excerpt: "Как цвета влияют на восприятие бренда",
      date: "18 октября 2025",
    },
    {
      id: 5,
      title: "Свет и тень в композиции",
      category: "Фотография",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/a452cd50-8dcd-4d62-9ff7-e2f260e3ff99.jpg",
      excerpt: "Мастерство работы с естественным светом",
      date: "17 октября 2025",
    },
    {
      id: 6,
      title: "Современное искусство и технологии",
      category: "Искусство",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/3b8b9e0b-9b5c-4503-a216-46029fba4afc.jpg",
      excerpt: "Цифровые инструменты в руках художника",
      date: "16 октября 2025",
    },
    {
      id: 7,
      title: "Типографика как искусство",
      category: "Дизайн",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/87633031-1538-4c60-b1bb-4c76f4d6f1db.jpg",
      excerpt: "Выразительность через шрифты и композицию",
      date: "15 октября 2025",
    },
    {
      id: 8,
      title: "Портретная съемка: эмоции и настроение",
      category: "Фотография",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/a452cd50-8dcd-4d62-9ff7-e2f260e3ff99.jpg",
      excerpt: "Как передать характер через объектив",
      date: "14 октября 2025",
    },
    {
      id: 9,
      title: "Геометрия в абстрактном искусстве",
      category: "Искусство",
      image: "https://cdn.poehali.dev/projects/17f3087a-5eb1-48fb-bd4a-58bf2e29d03a/files/3b8b9e0b-9b5c-4503-a216-46029fba4afc.jpg",
      excerpt: "Формы и линии как язык визуального искусства",
      date: "13 октября 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Creative Blog
            </h1>
            <nav className="hidden md:flex gap-8">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name={cat.icon as any} size={16} />
                  {cat.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Творческое вдохновение{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              каждый день
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Исследуйте мир дизайна, искусства и фотографии через призму современного творчества
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Читать статьи
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              <Icon name="BookOpen" size={20} className="mr-2" />
              О блоге
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Избранное</h3>
          <div className="flex gap-3">
            {categories.map((cat) => (
              <Badge
                key={cat.name}
                variant="outline"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {cat.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {featuredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Calendar" size={14} />
                  <span>{article.date}</span>
                </div>
                <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:bg-transparent">
                  Читать далее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-3xl font-bold mb-8">Последние статьи</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group overflow-hidden border-0 shadow hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h4 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Creative Blog
              </h4>
              <p className="text-sm text-muted-foreground">
                Ваш источник вдохновения в мире дизайна, искусства и фотографии
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Категории</h5>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {cat.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Следите за нами</h5>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Facebook" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2025 Creative Blog. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
