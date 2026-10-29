// All resume text lives here. Edit this file to change the resume.
// static.html reads this and builds the page from it.
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
      degree: "Bachelor of Science (B.S.) in Electrical Engineering",
      location: "Atlanta, GA",
      dates: "Aug 2020",
      details: ["Bachelor of Science (B.S.) in Electrical Engineering"],
    },
  ],
  skills: {
    frameworks: "NET, Angular, NestJS, React Native, Spring Boot",
    languages: "ASM, C, C++, C#, HTML/CSS, Go, Java, JavaScript, Ladder Logic, MATLAB, Python, Rust, SQL, TypeScript",
    software: "Azure DevOps, BigQuery, Blazemeter, git, Google Cloud, Harness, IntelliJ, Jupyter, Kusto, Microsoft Azure, Multisim, Postman, Power BI, React, Redis, Visual Studio, VS Code",
  },
  experience: [
    {
      company: "Microsoft",
      roles: [
        {
          title: "Software Engineer II",
          location: "Los Angeles, CA",
          dates: "Aug 2023 – Present",
          bullets: [
            "Contributed features enhancements to an internal .NET application responsible for bringing > 50k physical network devices per month to production with quality checks, resulting in cycle time improvements for P99 from 1200h hrs → 175 hrs, P75 from 38 hrs → 0.5 hrs, average from 84 hrs → 11 hrs.",
          ],
        },
        {
          title: "Software Engineer I",
          location: "Atlanta, GA",
          dates: "Mar 2022 – Aug 2023",
          bullets: [
            "Designed and implemented datacenter buildout orchestration automation for upgrading chassis, eliminating the need for manual intervention in device refreshes, resulting in a touch-less build experience, saving an estimated $28 million in network equipment re-use costs for FY22.",
            "Achieved cycle time goals of 2 days per device, with support for network refreshes in multiple hundreds of data centers, including the refresh of approximately 21K devices through Q2FY25.",
          ],
        },
      ],
    },
    {
      company: "NCR",
      roles: [
        {
          title: "Software Engineer",
          location: "Atlanta, GA",
          dates: "Oct 2020 – Mar 2022",
          bullets: [
            "Built and shipped a NestJS backend with BigQuery interactivity and support for the generation of product recommendations based on transaction histories, which was then integrated with an existing frontend application.",
            "Created a React Native UI component library from scratch for use in company cross-platform frontend applications, including a white-label phone app for shopping, which was codeveloped.",
            "Developed and shipped features for multiple high throughput production applications including NCR Business Services Platform apps including ‘Order' and ‘Delivery’, which serve as backend services for many hospitality fulfillment applications and their customers.",
          ],
        },
      ],
    },
    {
      company: "Comcast",
      roles: [
        {
          title: "Critical Infrastructure and Deployment Operations Engineering Intern",
          location: "Atlanta, GA",
          dates: "May 2019 – Aug 2019",
          bullets: [
            "Developed an iPhone app which enables the use of computer vision to recognize hardware contained in server racks for the purposes of rapidly logging inventory, with position and elevation, and then comparing to last known positions and asserting possible deltas to the user with confirmation.",
            "Lead an initiative to onboard a DCIM (data center infrastructure management) system for monitoring granular temperature and power consumption at one of Comcast’s sites, working separately with two different potential vendors and providing them necessary logistical information while simultaneously assessing their software solution capabilities, to provide the business with engineering recommendations.",
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
            "Independently represented FAS onsite on multiple occasions directing plant workers and other contractors during install and startup while simultaneously revising PLC (programmable logic controller) code and interfacing with project managers.",
            "Responsible for the creation of multiple PLC programs for implementation in various physical locations, utilizing cameras, lights, motors, servos, scanners, and VFDs (variable frequency drive).",
            "Designed and outfitted UI/UX for HMIs (human machine interface) for use in conjunction with PLCs in several locations in the United States and internationally.",
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
        "Developed iPhone app capable of recognizing faceplates of rack-mounted server equipment in Comcast datacenters and headends.",
        "Sourced annotations from interns via web-based frontend, which populates a database for training the model.",
      ],
    },
    {
      title: "Package Scanner Sort System",
      dates: "Spring 2017",
      bullets: [
        "Developed software for a PLC to process data from multiple barcode scanner cameras to make determinations for package destinations to be transported for shipping.",
        "Configured cameras to match angular speed of packages necessary for clear acquisitions via correct focal distance, adequately high shutter speeds, and ISO dialed within reasonable signal to noise ratio bounds to provide readings without failure.",
      ],
    },
  ],
};
