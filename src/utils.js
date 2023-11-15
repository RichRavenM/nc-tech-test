exports.templateUrlCache = (templates) => {
  const cache = {};
  templates.forEach((template) => {
    const id = template.id;
    cache[id] = template.imageUrl;
  });
  return cache;
};
