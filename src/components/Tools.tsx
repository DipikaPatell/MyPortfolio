import { motion } from 'framer-motion';

const tools = [
  {
    name: "Node.js",
    icon: "https://nodejs.org/static/images/logo.svg"
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  },
 {
    name: "AWS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    name:"Java",
    icon:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  },
  {
    name:"GitHub",
    icon:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  },
  {
    name:"MongoDB",
    icon:"https://s.yimg.com/fz/api/res/1.2/HqqAD7lEwn8pWW30aRZijA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/ce09550a-8473-3f5c-a7da-350b483116dd/t_500x300"
  },
{
  name:"Webflow",
  icon:"https://s.yimg.com/fz/api/res/1.2/WJmjEP7mV2XoatE0tP63Rg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/c37f8e34-608b-3819-9500-d86206a612ff/t_500x300"
  },
  {
    name:"C",
    icon:"https://www.shutterstock.com/image-vector/c-language-logo-simple-colours-600nw-2113921046.jpg"
  },
  {
    name:"C++",
    icon:"//upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/125px-ISO_C%2B%2B_Logo.svg.png"
  },
  {
    name:"Express.js",
    icon:"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
  },
 {
  name:"Postman",
  icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s"

 },
 {
  name :"API",
  icon:"https://chisellabs.com/glossary/wp-content/uploads/2021/06/What-is-an-API.png"
 }


];

export const Tools = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-white rounded-full p-3 shadow-lg">
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-300 mt-2 text-center">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}