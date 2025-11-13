import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Iyal {
  name: string;
}

interface Paal {
  name: string;
  iyals: Iyal[];
}

const Paals = () => {
  const [paals, setPaals] = useState<Paal[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch("/api/alldata")
        .then((res) => res.json())
        .then((data) => {
          console.log("Received Data: ", data);
          console.log("First paal iyals: ", data[0]?.iyals);
          setPaals(data);
        });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }, []);

  const handleIyalClick = (paalName: string, iyalName: string) => {
    navigate(
      `/athigarams/${encodeURIComponent(paalName)}/${encodeURIComponent(
        iyalName
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* About Thirukural Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-[#F0F4F7] rounded-xl shadow-lg p-6 md:p-8 border border-[#E0E0E0]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#36454F] mb-6 text-center">
            திருக்குறள் பற்றி
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-[#E0E0E0] shadow-sm">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-bold text-[#36454F] text-sm mb-1">
                தமிழ் இலக்கியத்தின் முத்து
              </h3>
              <p className="text-xs text-[#708090]">
                உலகின் சிறந்த நெறிமுறை நூல்
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-[#E0E0E0] shadow-sm">
              <div className="text-3xl mb-2">✍️</div>
              <h3 className="font-bold text-[#36454F] text-sm mb-1">
                திருவள்ளுவர்
              </h3>
              <p className="text-xs text-[#708090]">
                கி.மு. 31-ல் வாழ்ந்த மாமுனிவர்
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-[#E0E0E0] shadow-sm">
              <div className="text-3xl mb-2">🌏</div>
              <h3 className="font-bold text-[#36454F] text-sm mb-1">
                உலகப் பொதுமறை
              </h3>
              <p className="text-xs text-[#708090]">
                40+ மொழிகளில் மொழிபெயர்ப்பு
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg border border-[#E0E0E0] shadow-sm">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="font-bold text-[#36454F] text-sm mb-1">
                மூன்று பால்கள்
              </h3>
              <p className="text-xs text-[#708090]">அறம், பொருள், காமம்</p>
            </div>
          </div>
        </div>
      </div>

      {/* Paals Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-[#36454F] mb-12">
          பால்களை தேர்ந்தெடுக்கவும்
        </h2>
        {paals.length > 0 ? (
          <div className="flex gap-6 justify-center flex-wrap">
            {paals.map((paal, paalIndex) => (
              <div
                key={paalIndex}
                className="min-w-[320px] max-w-[380px] p-6 bg-white border border-[#E0E0E0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <h2 className="text-2xl font-bold mb-4 text-[#36454F] border-b-2 border-[#4A90E2] pb-2">
                  {paalIndex + 1}. {paal.name}
                </h2>
                {paal.iyals && paal.iyals.length > 0 && (
                  <ul className="space-y-2">
                    {paal.iyals.map((iyal, iyalIndex) => (
                      <li
                        key={iyalIndex}
                        onClick={() => handleIyalClick(paal.name, iyal.name)}
                        className="text-sm p-3 bg-[#F0F4F7] rounded-lg border border-[#E0E0E0] hover:border-[#4A90E2] hover:bg-white transition-colors duration-200 cursor-pointer"
                      >
                        <span className="font-semibold text-[#4A90E2]">
                          {paalIndex + 1}.{iyalIndex + 1}
                        </span>{" "}
                        <span className="text-[#36454F]">{iyal.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <p className="text-xl text-[#708090] animate-pulse">Loading...</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#36454F] text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#4A90E2]">
                திருக்குறள்
              </h3>
              <p className="text-[#E0E0E0] leading-relaxed">
                உலகப் பொதுமறை திருக்குறளை எளிமையாக படிக்கவும், புரிந்துகொள்ளவும்
                உதவும் தளம்.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#4A90E2]">
                விரைவு இணைப்புகள்
              </h4>
              <ul className="space-y-2 text-[#E0E0E0]">
                <li
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-[#4A90E2] cursor-pointer transition-colors"
                >
                  பால்கள்
                </li>
                <li
                  onClick={() => {
                    const element = document.querySelector("h2");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-[#4A90E2] cursor-pointer transition-colors"
                >
                  இயல்கள்
                </li>
                <li
                  onClick={() => navigate("/")}
                  className="hover:text-[#4A90E2] cursor-pointer transition-colors"
                >
                  முகப்பு
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 text-[#4A90E2]">தகவல்</h4>
              <ul className="space-y-2 text-[#E0E0E0]">
                <li>மொத்த குறள்கள்: 1330</li>
                <li>மொத்த அதிகாரங்கள்: 133</li>
                <li>மொத்த பால்கள்: 3</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#708090] pt-8 text-center">
            <p className="text-[#E0E0E0]">
              © 2025 திருக்குறள் தளம். அனைத்து உரிமைகளும் திருவள்ளுவர் பெயரில்.
            </p>
            <p className="text-white mt-2 text-sm">
              "யாதும் ஊரே, யாவரும் கேளிர்"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Paals;
