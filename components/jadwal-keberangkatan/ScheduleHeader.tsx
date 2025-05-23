const ScheduleHeader = () => {
    return (
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
          Jadwal Keberangkatan LRT Sumatera Selatan
        </h1>
        <p className="text-gray-400 mb-8">
          Perjalanan LRT Palembang pada stasiun DJKA dimulai sejak pukul 05.00 WIB dan berakhir pada 19.01 WIB. Sementara untuk yang dari Bandara beroperasi sejak pukul 06.00 WIB dan berakhir pada 19.50 WIB.
        </p>
  
        {/* Direction Card untuk Bandara ke DJKA */}
        <div className="bg-gray-200 rounded-lg p-4 mb-6 flex items-center gap-4 w-full">
          <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.9799 6.19L7.26994 2.48C7.19994 2.41 7.10994 2.35 7.00994 2.31C6.99994 2.31 6.98994 2.31 6.97994 2.3C6.89994 2.27 6.81994 2.25 6.72994 2.25C6.52994 2.25 6.33994 2.33 6.19994 2.47L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.23994 7.54 3.52994 7.25L5.97994 4.8V21C5.97994 21.41 6.31994 21.75 6.72994 21.75C7.13994 21.75 7.47994 21.41 7.47994 21V4.81L9.91994 7.25C10.0699 7.4 10.2599 7.47 10.4499 7.47C10.6399 7.47 10.8299 7.4 10.9799 7.25C11.2699 6.96 11.2699 6.49 10.9799 6.19Z" fill="white"/>
              <path d="M21.5302 16.75C21.2402 16.46 20.7602 16.46 20.4702 16.75L18.0202 19.2V3C18.0202 2.59 17.6802 2.25 17.2702 2.25C16.8602 2.25 16.5202 2.59 16.5202 3V19.19L14.0802 16.75C13.7902 16.46 13.3102 16.46 13.0202 16.75C12.7302 17.04 12.7302 17.52 13.0202 17.81L16.7302 21.52C16.8002 21.59 16.8902 21.65 16.9902 21.69C17.0002 21.69 17.0102 21.69 17.0202 21.7C17.1002 21.73 17.1902 21.75 17.2802 21.75C17.4802 21.75 17.6702 21.67 17.8102 21.53L21.5302 17.81C21.8202 17.51 21.8202 17.04 21.5302 16.75Z" fill="white"/>
            </svg>
          </div>
          <span className="font-bold break-words">Perjalanan dari Bandara ke DJKA (12 Pemberhentian)</span>
        </div>
      </div>
    );
  };
  
  export default ScheduleHeader;