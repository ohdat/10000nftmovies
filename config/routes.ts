export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: '/',
        component: '@/pages/home',
      },
      {
        path: '/gallery',
        component: '@/pages/gallery',
      },
    ],
  },
];
