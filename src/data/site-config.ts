export type Image = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Link = {
  text: string;
  href: string;
};

export type Hero = {
  title?: string;
  text?: string;
  image?: Image;
  actions?: Link[];
};

export type Subscribe = {
  title?: string;
  text?: string;
  formUrl: string;
};

export type SiteConfig = {
  logo?: Image;
  title: string;
  subtitle?: string;
  description: string;
  image?: Image;
  headerNavLinks?: Link[];
  footerNavLinks?: Link[];
  socialLinks?: Link[];
  hero?: Hero;
  subscribe?: Subscribe;
  postsPerPage?: number;
};

const siteConfig: SiteConfig = {
  title: 'Games beyond borders',
  subtitle: 'ข้อมูล+ความรู้ เกี่ยวกับเกมแปลไทย',
  description: 'Games beyond borders - ข้อมูล+ความรู้ เกี่ยวกับเกมแปลไทย ทั้งเกมแปลโดย Official และ Modder',
  image: {
    src: '/img/gamesbeyondborders.jpg',
    alt: 'Games beyond borders - ข้อมูล+ความรู้ เกี่ยวกับเกมแปลไทย ทั้งเกมแปลโดย Official และ Modder'
  },
  headerNavLinks: [
    {
      text: 'Stories',
      href: '/stories'
    },
    {
      text: 'Tags',
      href: '/tags'
    },
    {
      text: 'About',
      href: '/about'
    }
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Terms',
      href: '/terms'
    }
  ],
  socialLinks: [
    {
      text: 'facebook',
      href: 'https://www.facebook.com/Games.beyond.borders.Project.TH/'
    }
  ],
  hero: {
    title: 'ข้อมูล+ความรู้ เกี่ยวกับเกมแปลไทย',
    text: 'ทั้งเกมแปลโดย Official และ Modder',
    image: {
      src: '/hero.jpeg',
      alt: 'A person sitting at a desk in front of a computer'
    },
    actions: [
      {
        text: 'Get in Touch',
        href: '/contact'
      }
    ]
  },
  subscribe: {
    title: 'Subscribe to Newsletter',
    text: 'Latest posts directly in your inbox.',
    formUrl: '#'
  },
  postsPerPage: 8
};

export default siteConfig;
