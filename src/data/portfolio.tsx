import type { ReactNode } from 'react'

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroStats = [
  { value: '2+', label: 'Years building product-focused software.' },
  { value: '12', label: 'Core tools across mobile, web, and backend.' },
  { value: '3', label: 'Languages for technical and team communication.' },
] as const

export const skillGroups = [
  { name: 'Flutter and Dart', level: 94 },
  { name: 'React and Frontend UI', level: 84 },
  { name: 'Laravel and APIs', level: 78 },
  { name: 'Architecture and Maintainability', level: 91 },
] as const

export const toolTags = [
  'Flutter',
  'Dart',
  'BLoC',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Laravel',
  'MySQL',
  'REST APIs',
  'Git',
  'Responsive UI',
  'Clean Architecture',
] as const

export const projectItems = [
  {
    title: 'Kurdistan Academy App',
    label: 'Production Mobile App',
    description:
      'A learning platform built for real users with authentication, course access, video learning, and scalable Flutter architecture.',
    snippet: ['lib/features/auth/', 'lib/features/courses/', 'lib/features/player/', 'lib/core/network/', 'lib/core/di/'],
    href: '/resume/MarwanStarCV.pdf',
    linkLabel: 'View case snapshot',
  },
  {
    title: 'Bnchina Mart',
    label: 'Flutter Commerce App',
    description:
      'A Flutter-based commerce experience focused on product discovery, structured catalog browsing, cart flows, and responsive mobile UI with the code organized into pages, widgets, and utility helpers.',
    snippet: ['lib/pages/home_page.dart', 'lib/pages/product_details_page.dart', 'lib/widgets/product_card.dart', 'lib/widgets/cart_summary.dart', 'lib/utils/helpers.dart'],
    href: '#contact',
    linkLabel: 'Discuss the build',
  },
  {
    title: 'E-Learning Website',
    label: 'Full-Stack Web Build',
    description:
      'A Laravel and MySQL web platform for serving educational content with organized backend structure and practical frontend delivery.',
    snippet: ['routes/web.php', 'CourseController.php', 'resources/views/courses/', 'app/Services/', 'database/migrations/'],
    href: '#experience',
    linkLabel: 'See related experience',
  },
] as const

export const educationItems = [
  {
    year: '2020 - 2024',
    title: 'Bachelor of Software Engineering',
    place: 'Koya University',
    description:
      'Built a strong foundation in software systems, database concepts, application development, and structured problem solving.',
  },
  {
    year: 'Ongoing',
    title: 'Independent Product Learning',
    place: 'Self-directed technical growth',
    description:
      'Focused on production Flutter patterns, frontend craft, maintainable architecture, and practical delivery through real projects.',
  },
  {
    year: 'Recent Focus',
    title: 'Relevant Coursework and Practice',
    place: 'Mobile, Web, and Backend',
    description:
      'Applied work across state management, API integration, responsive interfaces, SQL, and scalable application structure.',
  },
] as const

export const experienceItems = [
  {
    period: '2024 - Present',
    role: 'Software Developer',
    company: 'Kurdistan Academy',
    description:
      'Building and maintaining a production-ready e-learning app with Flutter, backend integrations, and architecture that supports long-term growth.',
    highlights: [
      'Implemented clean structure with BLoC and feature separation.',
      'Worked on authentication, content delivery, API handling, and UI improvements.',
      'Helped keep the application maintainable while features continued shipping.',
    ],
  },
  {
    period: '2024',
    role: 'Frontend Developer Intern',
    company: 'Fastlink',
    description:
      'Contributed to a React-based internship platform and gained hands-on experience with component-driven frontend collaboration.',
    highlights: [
      'Built responsive UI pieces with attention to clarity and usability.',
      'Collaborated on interface refinement and practical feature work.',
      'Strengthened production-minded habits around teamwork and delivery.',
    ],
  },
] as const

export type SocialLink = {
  label: string
  href: string
  icon: ReactNode
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Email',
    href: 'mailto:marwan.00181941@gmail.com',
    icon: (
      <path
        d="M3.75 6.75h16.5v10.5H3.75V6.75Zm1.5 1.5v.398l6.75 4.58 6.75-4.58V8.25l-6.75 4.58-6.75-4.58Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <path
        d="M12 2.75a9.25 9.25 0 0 0-2.924 18.025c.462.085.633-.197.633-.445 0-.222-.013-.96-.013-1.745-2.323.432-2.925-.57-3.11-1.094-.105-.274-.554-1.094-.95-1.313-.327-.177-.791-.609-.013-.622.739-.013 1.267.681 1.444.96.843 1.42 2.19 1.02 2.728.779.08-.61.33-1.02.606-1.254-2.058-.233-4.208-1.029-4.208-4.57 0-1.007.357-1.836.95-2.48-.094-.233-.42-1.183.092-2.465 0 0 .777-.248 2.55.947a8.64 8.64 0 0 1 4.642 0c1.773-1.207 2.55-.947 2.55-.947.512 1.282.186 2.232.092 2.465.593.644.95 1.46.95 2.48 0 3.553-2.163 4.337-4.22 4.57.34.292.632.85.632 1.731 0 1.25-.013 2.255-.013 2.571 0 .248.17.543.632.445A9.254 9.254 0 0 0 12 2.75Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <path
        d="M6.375 8.25A1.875 1.875 0 1 0 6.375 4.5a1.875 1.875 0 0 0 0 3.75Zm-1.5 1.5h3v9h-3v-9Zm4.875 0h2.875v1.28h.041c.4-.72 1.377-1.48 2.834-1.48 3.03 0 3.59 1.995 3.59 4.59v4.61h-3v-4.087c0-.974-.018-2.227-1.357-2.227-1.36 0-1.569 1.062-1.569 2.156v4.158h-3v-9Z"
        fill="currentColor"
      />
    ),
  },
]
