import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface Athigaram {
  name: string;
}

interface Iyal {
  name: string;
  athigarams: Athigaram[];
}

interface Paal {
  name: string;
  iyals: Iyal[];
}

const Athigarams = () => {
  const { paalName, iyalName } = useParams();
  const navigate = useNavigate();
  const [athigarams, setAthigarams] = useState<Athigaram[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAthigarams = async () => {
      try {
        const response = await fetch("/api/alldata");
        const data = await response.json();

        // Find the specific paal and iyal
        const paal = data.find((p: Paal) => p.name === paalName);
        if (paal) {
          const iyal = paal.iyals.find((i: Iyal) => i.name === iyalName);
          if (iyal && iyal.athigarams) {
            setAthigarams(iyal.athigarams);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching athigarams:", error);
        setLoading(false);
      }
    };

    fetchAthigarams();
  }, [paalName, iyalName]);

  const handleAthigaramClick = (athigaramName: string) => {
    navigate(`/kurals/${encodeURIComponent(athigaramName)}`);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors"
        >
          ← பின்செல்
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#36454F] mb-2">{iyalName}</h1>
          <p className="text-lg text-[#708090]">({paalName})</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-[#708090] animate-pulse">Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {athigarams.map((athigaram, index) => (
              <div
                key={index}
                onClick={() => handleAthigaramClick(athigaram.name)}
                className="p-6 bg-[#F0F4F7] border border-[#E0E0E0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-[#4A90E2]"
              >
                <div className="flex items-start">
                  <span className="text-2xl font-bold text-[#4A90E2] mr-3">
                    {index + 1}.
                  </span>
                  <h3 className="text-lg font-semibold text-[#36454F] flex-1">
                    {athigaram.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && athigarams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-[#708090]">
              இந்த இயலில் அதிகாரங்கள் இல்லை
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Athigarams;
