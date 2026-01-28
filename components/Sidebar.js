// components/Sidebar.js
const Sidebar = () => {
  const categories = [
    { name: 'Nouveautés', count: 12, href: '/parfums?sort=new' },
    { name: 'Parfums Femme', count: 45, href: '/parfums?genre=femme' },
    { name: 'Parfums Homme', count: 38, href: '/parfums?genre=homme' },
    { name: 'Parfums Mixtes', count: 22, href: '/parfums?genre=mixte' },
    { name: 'Coffrets Cadeaux', count: 10, href: '/parfums?cat=coffret' },
  ];

  return (
    <ul className="space-y-3">
      {categories.map((cat, index) => (
        <li key={index} className="group">
          <a
            href={cat.href}
            className="flex justify-between items-center text-sm text-gray-700 hover:text-orange-600 transition"
          >
            <span>{cat.name}</span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-400 group-hover:bg-orange-100 group-hover:text-orange-600">
              {cat.count}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
