// All resume text lives here. Edit this file to change the resume.
// index.html reads this and builds the page from it.
window.RESUME = {
  name: "Luke Rucker",
  contact: {
    location: "Los Angeles, California",
    email: "lukerucker@gmail.com",
  },
  objective: "Detail / team-oriented software engineer with wide gamut of development experience looking for contributor roles",
  education: [
    {
      school: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      dates: "Aug 2020",
      details: ["Bachelor of Science (B.S.) in Electrical Engineering"],
    },
  ],
  skills: {
    languages: "ASM, C, C++, C#, HTML/CSS, Go, Java, JavaScript, Ladder Logic, MATLAB, Python, Rust, SQL, TypeScript",
    software: ".NET, Azure DevOps, BigQuery, Blazemeter, Git, Google Cloud, Harness, IntelliJ, Jupyter, Kusto, Microsoft Azure, Multisim, NestJS, Postgres, Postman, Power BI, React Native, Redis, Spring Boot, Visual Studio",
  },
  experience: [
    {
      company: "Microsoft",
      roles: [
        {
          title: "Software Engineer II, Physical Network Buildout",
          location: "Atlanta, GA → Los Angeles, CA",
          dates: "Aug 2023 – Present",
          bullets: [
            "Contributed features enhancements to an internal .NET application responsible for bringing > 50k physical network devices per month to production with quality checks, resulting in cycle time improvements for P99 from 1200h hrs → 175 hrs, P75 from 38 hrs → 0.5 hrs, average from 84 hrs → 11 hrs.",
          ],
        },
      ],
    },
    {
      company: "Microsoft",
      roles: [
        {
          title: "Software Engineer I, Physical Network Buildout",
          location: "Atlanta, GA",
          dates: "Mar 2022 – Aug 2023",
          bullets: [
            "Designed and implemented datacenter buildout orchestration to automate chassis upgrades, eliminate manual intervention in device refreshes, and enable touchless execution, contributing an estimated $28 million in network-equipment reuse savings in FY22.",
            "Met a two-day-per-device cycle-time target while supporting network refreshes across hundreds of data centers, including approximately 21K devices through Q2 FY25.",
          ],
        },
      ],
    },
    {
      company: "NCR",
      roles: [
        {
          title: "Software Engineer, Business Services Platform",
          location: "Atlanta, GA",
          dates: "Oct 2020 – Mar 2022",
          bullets: [
            "Built and shipped an extensible, vendor-agnostic NestJS recommendation engine for a white-label shopping app, providing product recommendations based on transaction data in BigQuery.",
            "Built and shipped a high-performance React Native component library from scratch, partnering closely with visual designers to create rich and readable animations and components, which were adopted across company applications.",
            "Shipped production features for NCR Business Services Platform's Order and Delivery services, core high-throughput backends supporting hospitality fulfillment for business clients and their customers.",
          ],
        },
      ],
    },
    {
      company: "Comcast",
      roles: [
        {
          title: "Electrical Engineer Intern, Critical Infra & Deployment Ops",
          location: "Atlanta, GA",
          dates: "May 2019 – Aug 2019",
          bullets: [
            "Built an iPhone inventory app that used computer vision to identify rack-mounted equipment, record its rack position and elevation, and flag changes against prior inventory for user review.",
            "Initiated and drove the evaluation of a data center infrastructure management (DCIM) system for site-level temperature and power monitoring, engaging two prospective vendors, providing site requirements, assessing their platforms, and delivering engineering recommendations to guide adoption.",
          ],
        },
      ],
    },
    {
      company: "Factory Automation Systems",
      roles: [
        {
          title: "Controls Engineer Co-op",
          location: "Atlanta, GA",
          dates: "May 2016 – Dec 2017",
          bullets: [
            "Coordinated plant personnel and contractors during equipment installation and startup, updated PLC logic onsite, and aligned execution with project intent.",
            "Programmed PLC control systems for deployments across multiple sites, integrating cameras, lighting, motors, servos, scanners, and variable-frequency drives (VFDs).",
            "Designed operator interfaces for PLC-based systems deployed at sites across the United States and internationally.",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Computer Vision Phone App",
      dates: "Autumn 2017",
      bullets: [
        "Built an iPhone app using YOLO-based object detection to identify rack-mounted server faceplates in Comcast data centers and headends.",
        "Developed a web-based annotation workflow that collected labeled images from interns and stored them in a database to train the detection model.",
      ],
    },
    {
      title: "Package Scanner Sort System",
      dates: "Spring 2017",
      bullets: [
        "Developed PLC software integrating four photoeye-triggered cameras to read package barcodes and route boxes to the correct shipping destinations on an industrial conveyor.",
        "Configured camera focus, shutter speed, and ISO to capture reliable barcode images from packages moving at conveyor speed.",
      ],
    },
  ],
};
