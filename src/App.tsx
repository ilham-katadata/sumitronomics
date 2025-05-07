import './App.css';

function App() {
  return (
    <div className="h-screen bg-cover bg-top bg-no-repeat bg-fixed">
      <div className='flex flex-col overflow-y-auto'>
        <div className="flex items-center justify-between w-full space-x-4 px-5 pt-5">
          <div className="flex flex-col items-start">
          <div className="text-column text-center mb-1">
            
            <p className="text-xs md:text-base text-white">Knowledge Partner</p>
          </div>
          <img src="images/ui_fbe.png" alt="ui" className="w-24 md:w-40 h-auto" />
          
          </div>

          <img src="images/katadata.png" alt="katadata" className="w-24 md:w-40 h-auto" />
        </div>


        <div className="flex flex-col items-center justify-end-safe h-full text-white px-7 mt-35 md:mt-50">
          {/* Button */}
          <button className="bg-gradient-to-r from-buttonkatadata to-purplekatadata text-white font-medium py-2 px-4 text-base rounded-full mt-1"
            // onClick={() => alert("Simposium Ekonomi Nasional button clicked!")}
          >
            Simposium Nasional
          </button>

          <img
            src="images/text_sumitro.png"
            alt="Menyoal Sumitronomics"
            className="mx-auto mt-10 mb-4 w-full max-w-3xl"
          />

          <h1 className="text-xl lg:text-2xl font-bold text-center mt-2 mb-6 text-blueligthkatadata">dan Arah Ekonomi Indonesia</h1>

          <p className="text-sm md:text-base text-shadow-lg text-center mt-1 mb-2 px-5 lg:w-1/2">
            “Sumitronomics” adalah strategi ekonomi nasionalis-pragmatis yang menggabungkan peran negara dan swasta, dengan fokus pada industrialisasi dan penguasaan ekonomi oleh rakyat, serta keterbukaan yang terukur terhadap asing.
          </p>

          <hr className="w-full lg:w-1/2 my-2 mx-auto divider" />

          <p className="text-sm text-center mt-2 mb-6 px-5">
            Nantikan pembahasan selengkapnya pada 3 Juni 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
