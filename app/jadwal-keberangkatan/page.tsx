import Image from "next/image";
import ScheduleHeader from "@/components/jadwal-keberangkatan/ScheduleHeader";
import TableFromBandara from "@/components/jadwal-keberangkatan/TableFromBandara";
import TableFromDjka from "@/components/jadwal-keberangkatan/TableFromDJKA";

export default function JadwalPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header, Info, dan Card Arah */}
        <ScheduleHeader />
        
        {/* Tabel dan Gambar Bandara ke DJKA */}
        <TableFromBandara />
        
        <div className="mb-12">
          <div className="text-center text-md font-bold text-gray-500 mb-4">
            JADWAL PERJALANAN (LIGHT RAIL TRANSIT) PALEMBANG SUMATERA SELATAN
            <br />
            PER TANGGAL 1 JANUARI 2023
          </div>
          <div className="relative w-full h-[850px] md:h-[500px] border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/jadwal-bandara-djka.png"
              alt="Jadwal LRT Bandara ke DJKA"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Direction Card untuk DJKA ke Bandara */}
        <div className="bg-gray-200 rounded-lg p-4 mb-6 flex items-center gap-4 w-full">
          <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.9799 6.19L7.26994 2.48C7.19994 2.41 7.10994 2.35 7.00994 2.31C6.99994 2.31 6.98994 2.31 6.97994 2.3C6.89994 2.27 6.81994 2.25 6.72994 2.25C6.52994 2.25 6.33994 2.33 6.19994 2.47L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.23994 7.54 3.52994 7.25L5.97994 4.8V21C5.97994 21.41 6.31994 21.75 6.72994 21.75C7.13994 21.75 7.47994 21.41 7.47994 21V4.81L9.91994 7.25C10.0699 7.4 10.2599 7.47 10.4499 7.47C10.6399 7.47 10.8299 7.4 10.9799 7.25C11.2699 6.96 11.2699 6.49 10.9799 6.19Z" fill="white"/>
              <path d="M21.5302 16.75C21.2402 16.46 20.7602 16.46 20.4702 16.75L18.0202 19.2V3C18.0202 2.59 17.6802 2.25 17.2702 2.25C16.8602 2.25 16.5202 2.59 16.5202 3V19.19L14.0802 16.75C13.7902 16.46 13.3102 16.46 13.0202 16.75C12.7302 17.04 12.7302 17.52 13.0202 17.81L16.7302 21.52C16.8002 21.59 16.8902 21.65 16.9902 21.69C17.0002 21.69 17.0102 21.69 17.0202 21.7C17.1002 21.73 17.1902 21.75 17.2802 21.75C17.4802 21.75 17.6702 21.67 17.8102 21.53L21.5302 17.81C21.8202 17.51 21.8202 17.04 21.5302 16.75Z" fill="white"/>
            </svg>
          </div>
          <span className="font-bold break-words">Perjalanan dari DJKA ke Bandara</span>
        </div>
        
        {/* Tabel dan Gambar DJKA ke Bandara */}
        <TableFromDjka />
        
        <div className="mb-12">
          <div className="text-center text-md font-bold text-gray-500 mb-4">
            JADWAL PERJALANAN (LIGHT RAIL TRANSIT) PALEMBANG SUMATERA SELATAN
            <br />
            PER TANGGAL 1 JANUARI 2023
          </div>
          <div className="relative w-full h-[850px] md:h-[500px] border border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/jadwal-djka-bandara.png"
              alt="Jadwal LRT DJKA ke Bandara"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}