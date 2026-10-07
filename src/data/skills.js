/**
 * Skills and services.
 *
 * The brief asks for a single 4-up grid under "Skills & Services", with each
 * card carrying an icon, a title and a one-line description. It explicitly does
 * not want a technology logo wall: every card explains what she does with the
 * tools, rather than just naming them.
 *
 * Descriptions say what actually happens rather than using marketing language.
 * Icons are Lucide names (see `src/components/ui/Icon.jsx`).
 */

export const skills = [
  {
    id: 'front-end',
    title: 'Front-End Development',
    icon: 'component',
    description:
      'HTML, CSS, JavaScript and React, built into responsive layouts that hold together from a phone to a wide screen.',
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    icon: 'layers',
    description:
      'Comfortable in both MERN (MongoDB, Express, React, Node.js) and LAMP (Linux, Apache, MySQL, PHP), with the stack chosen to suit the project.',
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    icon: 'fileText',
    description:
      'Building and customising WordPress websites, so the design holds up and you can still update the content yourself.',
  },
  {
    id: 'figma-to-code',
    title: 'Figma-to-Code',
    icon: 'penTool',
    description:
      'Turning a Figma design into a fully built, responsive, production-ready website that matches the original.',
  },
]
