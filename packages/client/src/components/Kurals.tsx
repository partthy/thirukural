import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

interface Kural {
  number: number;
  line1: string;
  line2: string;
  translation?: string;
  en?: string;
  urai1?: string;
  urai1Author?: string;
  urai2?: string;
  urai2Author?: string;
  urai3?: string;
  urai3Author?: string;
}

const Kurals = () => {
  const { athigaramName } = useParams();
  const navigate = useNavigate();
  const [kurals, setKurals] = useState<Kural[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKurals = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/athigarams/${encodeURIComponent(athigaramName!)}`
        );
        const data = await response.json();
        setKurals(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching kurals:", error);
        setLoading(false);
      }
    };

    if (athigaramName) {
      fetchKurals();
    }
  }, [athigaramName]);

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors flex items-center gap-2"
        >
          <span>←</span> பின்செல்
        </button>

        <div className="mb-8 bg-[#F0F4F7] p-6 rounded-xl shadow-lg border border-[#E0E0E0]">
          <h1 className="text-3xl md:text-4xl font-bold text-[#36454F] mb-2">
            {athigaramName}
          </h1>
          <p className="text-[#708090]">
            மொத்த குறள்கள்:{" "}
            <span className="font-semibold text-[#4A90E2]">
              {kurals.length}
            </span>
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-[#708090] animate-pulse">Loading...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {kurals.map((kural, index) => (
              <div
                key={index}
                className="bg-white border border-[#E0E0E0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Header with Kural Number */}
                <div className="bg-linear-to-r from-[#4A90E2] to-[#357ABD] px-6 py-3">
                  <h2 className="text-xl font-bold text-white">
                    குறள் #{kural.number}
                  </h2>
                </div>

                {/* Kural Lines */}
                <div className="p-6 bg-[#F0F4F7]">
                  <div className="space-y-2 mb-4">
                    <p className="text-xl md:text-2xl font-semibold text-[#36454F] leading-relaxed">
                      {kural.line1}
                    </p>
                    <p className="text-xl md:text-2xl font-semibold text-[#36454F] leading-relaxed">
                      {kural.line2}
                    </p>
                  </div>

                  {/* English Translation */}
                  {kural.en && (
                    <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-[#4A90E2]">
                      <p className="text-sm font-semibold text-[#4A90E2] mb-1">
                        English Translation:
                      </p>
                      <p className="text-[#36454F] italic">{kural.en}</p>
                    </div>
                  )}

                  {kural.translation && (
                    <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-[#708090]">
                      <p className="text-sm font-semibold text-[#708090] mb-1">
                        Translation:
                      </p>
                      <p className="text-[#36454F] italic">
                        {kural.translation}
                      </p>
                    </div>
                  )}

                  {/* Explanations */}
                  <div className="mt-6 space-y-4">
                    {kural.urai1 && (
                      <div className="p-4 bg-white rounded-lg border border-[#E0E0E0]">
                        <p className="text-sm font-semibold text-[#4A90E2] mb-2">
                          விளக்கம் - {kural.urai1Author || ""}
                        </p>
                        <p className="text-[#36454F] leading-relaxed">
                          {kural.urai1}
                        </p>
                      </div>
                    )}

                    {kural.urai2 && (
                      <div className="p-4 bg-white rounded-lg border border-[#E0E0E0]">
                        <p className="text-sm font-semibold text-[#4A90E2] mb-2">
                          விளக்கம் - {kural.urai2Author || ""}
                        </p>
                        <p className="text-[#36454F] leading-relaxed">
                          {kural.urai2}
                        </p>
                      </div>
                    )}

                    {kural.urai3 && (
                      <div className="p-4 bg-white rounded-lg border border-[#E0E0E0]">
                        <p className="text-sm font-semibold text-[#4A90E2] mb-2">
                          விளக்கம் - {kural.urai3Author || ""}
                        </p>
                        <p className="text-[#36454F] leading-relaxed">
                          {kural.urai3}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && kurals.length === 0 && (
          <div className="text-center py-12 bg-[#F0F4F7] rounded-xl shadow-lg">
            <p className="text-xl text-[#708090]">
              இந்த அதிகாரத்தில் குறள்கள் இல்லை
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kurals;
