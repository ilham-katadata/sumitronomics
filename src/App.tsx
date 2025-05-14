import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>

        <title>
          Simposium Nasional
        </title>

        <meta
          name='description'
          content='Simposium Nasional
Sumitronomics dan Arah Ekonomi Indonesia

Ia termasuk segelintir orang yang ditabalkan sebagai begawan ekonomi Indonesia. Spektrum pemikiran Sumitro Djojohadikusumo membentang luas dari keuangan mikro hingga ekonomi makro, dan menjadikannya sosok yang dipertimbangkan oleh bangsa Indonesia dalam rentang kemerdekaan hingga hari ini. 

Di akhir 1980-an, kalangan teknokrat dan sejumlah ekonom bahkan menjulukinya sebagai ‘Sang Ayatullah Indonesia’ karena pemikiran dan pengaruhnya dalam kebijakan-kebijakan negara. Seperti apa saja pandangannya yang kemudian mewujud dalam sumitronomics? Nantikan pembahasannya dalam simposium nasional dan edisi khusus ‘Sumitronomics dan Arah Ekonomi Indonesia’ pada 3 Juni 2025.'
        />

      </Helmet>
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


          <div className="flex flex-col items-center justify-end-safe h-full text-white px-2 mt-15 md:mt-20">
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



            <p className="text-sm md:text-base text-shadow-lg text-center mt-1 mb-2 px-2 lg:w-1/2">
              Ia termasuk segelintir orang yang ditabalkan sebagai begawan ekonomi Indonesia. Spektrum pemikiran Sumitro Djojohadikusumo membentang luas dari keuangan mikro hingga ekonomi makro, dan menjadikannya sosok yang dipertimbangkan oleh bangsa Indonesia dalam rentang kemerdekaan hingga hari ini.
            </p>
            <p className="text-sm md:text-base text-shadow-lg text-center mt-1 mb-2 px-2 lg:w-1/2">
              Di akhir 1980-an, kalangan teknokrat dan sejumlah ekonom bahkan menjulukinya sebagai ‘Sang Ayatullah Indonesia’ karena pemikiran dan pengaruhnya dalam kebijakan-kebijakan negara. Seperti apa saja pandangannya yang kemudian mewujud dalam sumitronomics?
            </p>

            <hr className="w-full lg:w-1/2 my-2 mx-auto divider" />

            <div className='w-full lg:w-1/2'>
              <p className="text-sm text-center mt-2 mb-6 px-5">
                {/* Nantikan pembahasan selengkapnya pada 3 Juni 2025 */}
                Nantikan pembahasannya dalam simposium nasional dan edisi khusus ‘Sumitronomics dan Arah Ekonomi Indonesia’ pada 3 Juni 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
