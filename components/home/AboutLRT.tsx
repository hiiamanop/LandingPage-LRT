import Link from 'next/link'

const AboutLRT = () => {
  const menuItems = [
    {
      title: "Informasi Rute",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.65 21.41C15.22 21.41 14.79 21.32 14.44 21.15L9.19004 18.52C8.89004 18.37 8.30004 18.38 8.01004 18.55L5.65004 19.9C4.63004 20.48 3.58004 20.56 2.79004 20.09C1.99004 19.63 1.54004 18.69 1.54004 17.51V7.79003C1.54004 6.88003 2.14004 5.85003 2.93004 5.40003L7.26004 2.92003C7.99004 2.50003 9.10004 2.47003 9.85004 2.85003L15.1 5.48003C15.4 5.63003 15.98 5.61003 16.28 5.45003L18.63 4.11003C19.65 3.53003 20.7 3.45003 21.49 3.92003C22.29 4.38003 22.74 5.32003 22.74 6.50003V16.23C22.74 17.14 22.14 18.17 21.35 18.62L17.02 21.1C16.64 21.3 16.14 21.41 15.65 21.41ZM8.64004 16.92C9.07004 16.92 9.50004 17.01 9.85004 17.18L15.1 19.81C15.4 19.96 15.98 19.94 16.28 19.78L20.61 17.3C20.93 17.12 21.24 16.58 21.24 16.22V6.49003C21.24 5.86003 21.06 5.39003 20.73 5.21003C20.41 5.03003 19.91 5.10003 19.37 5.41003L17.02 6.75003C16.29 7.17003 15.18 7.20003 14.43 6.82003L9.18004 4.19003C8.88004 4.04003 8.30004 4.06003 8.00004 4.22003L3.67004 6.70003C3.35004 6.88003 3.04004 7.42003 3.04004 7.79003V17.52C3.04004 18.15 3.22004 18.62 3.54004 18.8C3.86004 18.99 4.36004 18.91 4.91004 18.6L7.26004 17.26C7.65004 17.03 8.15004 16.92 8.64004 16.92Z" fill="#CF0000"/>
            <path d="M8.56006 17.75C8.15006 17.75 7.81006 17.41 7.81006 17V4C7.81006 3.59 8.15006 3.25 8.56006 3.25C8.97006 3.25 9.31006 3.59 9.31006 4V17C9.31006 17.41 8.97006 17.75 8.56006 17.75Z" fill="#CF0000"/>
            <path d="M15.73 20.75C15.32 20.75 14.98 20.41 14.98 20V6.62C14.98 6.21 15.32 5.87 15.73 5.87C16.14 5.87 16.48 6.21 16.48 6.62V20C16.48 20.41 16.14 20.75 15.73 20.75Z" fill="#CF0000"/>
        </svg>
      ),
      href: "/informasi-rute"
    },
    {
      title: "Jadwal Keberangkatan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22.75C6.76 22.75 2.5 18.49 2.5 13.25C2.5 8.01 6.76 3.75 12 3.75C17.24 3.75 21.5 8.01 21.5 13.25C21.5 18.49 17.24 22.75 12 22.75ZM12 5.25C7.59 5.25 4 8.84 4 13.25C4 17.66 7.59 21.25 12 21.25C16.41 21.25 20 17.66 20 13.25C20 8.84 16.41 5.25 12 5.25Z" fill="#B2000F"/>
            <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#B2000F"/>
            <path d="M15 2.75H9C8.59 2.75 8.25 2.41 8.25 2C8.25 1.59 8.59 1.25 9 1.25H15C15.41 1.25 15.75 1.59 15.75 2C15.75 2.41 15.41 2.75 15 2.75Z" fill="#B2000F"/>
        </svg>
      ),
      href: "/jadwal-keberangkatan"
    },
    {
      title: "Cara Membeli Tiket",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 20.75H12C11.59 20.75 11.25 20.41 11.25 20C11.25 19.59 11.59 19.25 12 19.25H17C19.86 19.25 21.25 17.86 21.25 15V9C21.25 6.14 19.86 4.75 17 4.75H7C4.14 4.75 2.75 6.14 2.75 9V11C2.75 11.41 2.41 11.75 2 11.75C1.59 11.75 1.25 11.41 1.25 11V9C1.25 5.35 3.35 3.25 7 3.25H17C20.65 3.25 22.75 5.35 22.75 9V15C22.75 18.65 20.65 20.75 17 20.75Z" fill="#B2000F"/>
            <path d="M12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25ZM12 10.25C11.04 10.25 10.25 11.04 10.25 12C10.25 12.96 11.04 13.75 12 13.75C12.96 13.75 13.75 12.96 13.75 12C13.75 11.04 12.96 10.25 12 10.25Z" fill="#B2000F"/>
            <path d="M18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5C19.25 14.91 18.91 15.25 18.5 15.25Z" fill="#B2000F"/>
            <path d="M8.5 18.69C8.09 18.69 7.75 18.35 7.75 17.94V16.66C7.75 16.44 7.57003 16.25 7.34003 16.25H2C1.59 16.25 1.25 15.91 1.25 15.5C1.25 15.09 1.59 14.75 2 14.75H7.34003C8.39003 14.75 9.25 15.61 9.25 16.66V17.94C9.25 18.35 8.91 18.69 8.5 18.69Z" fill="#B2000F"/>
            <path d="M3.21994 17.4699C3.02994 17.4699 2.83997 17.4 2.68997 17.25L1.46994 16.03C1.17994 15.74 1.17994 15.2599 1.46994 14.9699L2.68997 13.75C2.97997 13.46 3.45997 13.46 3.74997 13.75C4.03997 14.04 4.03997 14.52 3.74997 14.81L3.05997 15.5L3.74997 16.19C4.03997 16.48 4.03997 16.96 3.74997 17.25C3.59997 17.4 3.40994 17.4699 3.21994 17.4699Z" fill="#B2000F"/>
            <path d="M8.5 21.5301H3.15997C2.10997 21.5301 1.25 20.6701 1.25 19.6201V18.3401C1.25 17.9301 1.59 17.5901 2 17.5901C2.41 17.5901 2.75 17.9301 2.75 18.3401V19.6201C2.75 19.8401 2.92997 20.0301 3.15997 20.0301H8.5C8.91 20.0301 9.25 20.3701 9.25 20.7801C9.25 21.1901 8.91 21.5301 8.5 21.5301Z" fill="#B2000F"/>
            <path d="M7.27976 22.75C7.08976 22.75 6.89973 22.68 6.74973 22.53C6.45973 22.24 6.45973 21.7599 6.74973 21.4699L7.43973 20.78L6.74973 20.09C6.45973 19.8 6.45973 19.32 6.74973 19.03C7.03973 18.74 7.51972 18.74 7.80972 19.03L9.02976 20.25C9.31976 20.54 9.31976 21.02 9.02976 21.31L7.80972 22.53C7.66972 22.68 7.46976 22.75 7.27976 22.75Z" fill="#B2000F"/>
        </svg>
      ),
      href: "/pembelian-tiket"
    },
    {
      title: "Promo dan Event",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.8101 20.18C15.5501 20.18 15.2801 20.17 14.9901 20.14C14.4701 20.1 13.8801 20 13.2701 19.85L11.5901 19.45C6.98007 18.36 5.47007 15.92 6.55007 11.32L7.53007 7.13001C7.75007 6.18002 8.01007 5.41002 8.33007 4.77002C10.0501 1.22002 13.3401 1.54001 15.6801 2.09001L17.3501 2.48001C19.6901 3.03001 21.1701 3.90001 22.0001 5.23002C22.8201 6.56002 22.9501 8.27001 22.4001 10.61L21.4201 14.79C20.5601 18.45 18.7701 20.18 15.8101 20.18ZM13.1201 3.25001C11.4501 3.25001 10.3901 3.94002 9.68007 5.42002C9.42007 5.96002 9.19007 6.63001 8.99007 7.47001L8.01007 11.66C7.12007 15.44 8.15007 17.09 11.9301 17.99L13.6101 18.39C14.1501 18.52 14.6601 18.6 15.1201 18.64C17.8401 18.91 19.1901 17.72 19.9501 14.45L20.9301 10.27C21.3801 8.34002 21.3201 6.99002 20.7201 6.02001C20.1201 5.05001 18.9401 4.39002 17.0001 3.94002L15.3301 3.55001C14.5001 3.35001 13.7601 3.25001 13.1201 3.25001Z" fill="#B2000F"/>
            <path d="M8.33005 22.25C5.76005 22.25 4.12005 20.71 3.07005 17.46L1.79005 13.5101C0.370052 9.11005 1.64005 6.63005 6.02005 5.21005L7.60005 4.70005C8.12005 4.54005 8.51005 4.43005 8.86005 4.37005C9.15005 4.31005 9.43005 4.42005 9.60005 4.65005C9.77005 4.88005 9.80005 5.18005 9.68005 5.44005C9.42005 5.97005 9.19005 6.64005 9.00005 7.48005L8.02005 11.6701C7.13005 15.4501 8.16005 17.1001 11.9401 18.0001L13.6201 18.4001C14.1601 18.5301 14.6701 18.6101 15.1301 18.6501C15.4501 18.68 15.7101 18.9 15.8001 19.21C15.8801 19.5201 15.7601 19.8401 15.5001 20.0201C14.8401 20.4701 14.0101 20.85 12.9601 21.1901L11.3801 21.71C10.2301 22.07 9.23005 22.25 8.33005 22.25ZM7.78005 6.22005L6.49005 6.64005C2.92005 7.79005 2.07005 9.47005 3.22005 13.0501L4.50005 17.0001C5.66005 20.5701 7.34005 21.4301 10.9101 20.2801L12.4901 19.7601C12.5501 19.7401 12.6001 19.7201 12.6601 19.7001L11.6001 19.4501C6.99005 18.3601 5.48005 15.92 6.56005 11.3201L7.54005 7.13005C7.61005 6.81005 7.69005 6.50005 7.78005 6.22005Z" fill="#B2000F"/>
            <path d="M17.4899 10.51C17.4299 10.51 17.3699 10.5 17.2999 10.49L12.4499 9.26002C12.0499 9.16002 11.8099 8.75002 11.9099 8.35002C12.0099 7.95002 12.4199 7.71002 12.8199 7.81002L17.6699 9.04002C18.0699 9.14002 18.3099 9.55002 18.2099 9.95002C18.1299 10.28 17.8199 10.51 17.4899 10.51Z" fill="#B2000F"/>
            <path d="M14.5601 13.89C14.5001 13.89 14.4401 13.88 14.3701 13.87L11.4601 13.13C11.0601 13.03 10.8201 12.62 10.9201 12.22C11.0201 11.82 11.4301 11.58 11.8301 11.68L14.7401 12.42C15.1401 12.52 15.3801 12.93 15.2801 13.33C15.2001 13.67 14.9001 13.89 14.5601 13.89Z" fill="#B2000F"/>
        </svg>
      ),
      href: "/promo"
    }
  ]

  return (
    <section className="relative py-16 md:py-24">
      {/* Decoration Circles */}
      <svg 
        className="absolute right-0 top-7 hidden lg:block -z-10"
        width="144" height="159" 
        viewBox="0 0 144 159" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="39.75" cy="39.75" r="39.75" fill="#FCDBCA"/>
        <circle cx="119.25" cy="39.75" r="39.75" fill="#FCDBCA"/>
        <circle cx="39.75" cy="119.25" r="39.75" fill="#FCDBCA"/>
        <circle cx="119.25" cy="119.25" r="39.75" fill="#FCDBCA"/>
      </svg>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            {/* Section Number */}
            <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <span className="font-bold">01</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
              Tentang LRT
              <br />
              Sumatera Selatan
            </h2>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-400 text-base md:text-lg mb-8 md:text-right">
              LRT Sumatera Selatan adalah transportasi berbasis rel pertama di Sumatera yang
              menghubungkan Bandara Sultan Mahmud Badaruddin II hingga Kompleks Olahraga Jakabaring.
              Diresmikan pada tahun 2018, LRT ini hadir untuk mendukung mobilitas warga Palembang
              sekaligus mendukung perhelatan olahraga internasional.
            </p>
          </div>
        </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between w-[342px] p-4 rounded-lg border border-gray-300 hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  {/* Grup untuk icon dan text */}
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{item.icon}</span>
                    <span className="font-medium">{item.title}</span>
                  </div>

                  {/* Arrow */}
                  <svg 
                    className="ml-auto"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <path d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z" fill="#828282"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
    </section>
  )
}

export default AboutLRT