export type Route = {
  link?: string;
  isInertia: boolean;
  linkName: string;
  submenu?: {
    link: string;
    linkName: string;
  }[];
};

export function getRoutes(): Route[] {
  return [
    { link: "/", linkName: "Home", isInertia: true },
    {
      linkName: "Aktuelles",
      isInertia: true,
      submenu: [
        { link: "/auftritte", linkName: "Auftritte" },
        { link: "/presse", linkName: "Presseinfos" },
        { link: "/buchung", linkName: "Buchungsinfos" },
      ],
    },
    {
      linkName: "Band",
      isInertia: true,
      submenu: [
        { link: "/about-us", linkName: "Über uns" },
        { link: "/musiker", linkName: "Musiker" },
        { link: "/anfahrt", linkName: "Anfahrt" },
      ],
    },
    {
      linkName: "Kontakt",
      isInertia: true,
      submenu: [
        { link: "/kontakt", linkName: "Kontakt" },
        { link: "/impressum", linkName: "Impressum" },
        { link: "/datenschutz", linkName: "Datenschutzerklärung" },
        { link: "/newsletter", linkName: "Newsletter" },
      ],
    },
    { link: "/login", linkName: "Login", isInertia: true },
  ];
}
