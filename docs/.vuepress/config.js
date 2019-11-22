module.exports = {
  title: "夜夜空里 | Stan Ye's blog",
  description: "Better to run than curse the road",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: 'Blog', link: '/blog/index.html' },
      { text: "About", link: "/about.html" }
    ],
    sidebar: 'auto'
  },
  dest: "public",
  plugins: [
    [
      '@shuaijs/gitalk',
      {
        clientID: 'b7ecea36c7957fdadfb6',
				clientSecret: '95dddf9298936c42c983f727c2f40c118d30a147',
				repo: 'stanye',
				owner: 'stanye',
				admin: ['stanye'],
        selector: '.page'
      }
    ]
  ]
};
