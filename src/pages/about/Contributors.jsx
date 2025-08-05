import CatImg from "../../assets/cat.png";
import JaguarImg from "../../assets/jaguar.png";
import DinoImg from "../../assets/dinosaur.png";
import PandaBearImg from "../../assets/panda-bear.png";
import DeerImg from "../../assets/deer.png";
import PandaImg from "../../assets/panda.png";

const contributors = [
    {
        name: "Paulet Crysline Pajo",
        role: "Project Lead",
        linkedin_url: "",
        github_url: "",
        profile_url: CatImg,
    },
    {
        name: "Jun Jun M. Zaragosa",
        role: "Lead Programmer",
        linkedin_url: "https://www.linkedin.com/in/jun-jun-zaragosa/",
        github_url: "https://github.com/jzaragosa06",
        profile_url: DinoImg,
    },
    {
        name: "Leynard Guinumtad",
        role: "Secretary",
        linkedin_url: "",
        github_url: "",
        profile_url: DeerImg,
    },
    {
        name: "Janeil Capales",
        role: "Secretary",
        linkedin_url: "",
        github_url: "",
        profile_url: PandaBearImg,
    },
    {
        name: "Camile Marticio",
        role: "Secretary",
        linkedin_url: "",
        github_url: "",
        profile_url: PandaImg,
    },
    {
        name: "Jann Daerick Finulliar",
        role: "Secretary",
        linkedin_url: "",
        github_url: "",
        profile_url: JaguarImg,
    },
];

const Contributor = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-lg font-semibold mb-6 text-center">Contributors</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {contributors.map((contributor, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
                    >
                        {/* <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" /> */}
                        <img src={contributor.profile_url} className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
                        <h3 className="text-sm font-medium">{contributor.name}</h3>
                        <p className="text-sm text-gray-500">{contributor.role}</p>
                        <div className="flex flex-row gap-3">
                            {contributor.linkedin_url && (
                                <a
                                    href={contributor.linkedin_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 text-blue-600 hover:text-blue-800 transition"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            )}

                            {contributor.github_url && (
                                <a
                                    href={contributor.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 text-blue-600 hover:text-blue-800 transition"
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contributor;
