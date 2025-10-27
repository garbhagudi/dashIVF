import { BsBuildings, BsCurrencyRupee } from "react-icons/bs";
import { CiMedicalCase, CiPercent } from "react-icons/ci";
import { GiMeditation } from "react-icons/gi";
import { ImLab } from "react-icons/im";

const featuresData = [
  {
    id: 1,
    name: "High Success Rate",
    icon: <CiPercent />,
    content:
      "GarbhaGudi has one of the highest IVF treatments success rates in the industry.",
    link: "/features/success-rates-of-ivf",
  },
  {
    id: 2,
    name: "World Class Fertility Care",
    icon: <BsBuildings />,
    content:
      "GarbhaGudi is Proud to have played a key role in bringing more than 15,000+ babies into the world since 2011.",
    link: "/features/world-class-fertility-care",
  },
  {
    id: 3,
    name: "Top Fertility Specialists",
    icon: <CiMedicalCase />,
    content:
      "Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.",
    link: "/fertility-experts",
  },
  {
    id: 4,
    name: "Affordable Treatments",
    icon: <BsCurrencyRupee />,
    content:
      "GarbhaGudi offers Affordable Infertility treatment without any compromise on service or quality of medicines or services",
    link: "/features/affordable-treatments",
  },
  {
    id: 7,
    name: "Holistic Approach",
    icon: <GiMeditation />,
    content:
      "At GarbhaGudi we are committed to Treating infertility through the holistic mind-body-soul programs.",
    link: "/features/holistic-approach",
  },
  {
    id: 9,
    name: "Best in Class Facilities",
    icon: <ImLab />,
    content:
      "Our IVF Centers in Bangalore are equipped to handle the most challenging cases with state of the art technology at our disposal",
    link: "/features/best-in-class-facilities",
  },
];

export default featuresData;