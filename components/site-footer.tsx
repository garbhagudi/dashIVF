import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="md:col-span-1 col-span-2 flex flex-col items-center order-3 md:order-1">
            <Image
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/w_256,h_56/v1751352018/GG_New-Hori_Logo_ziwur1.svg"
              alt="GarbhaGudi IVF Centre Logo"
              width={200}
              height={50}
              className="h-auto w-40 mb-4"
              quality={80}
              
            />
            <div className="flex gap-2 text-sm text-gray-600 mt-4">
              <span>Terms of use</span>
              <span>|</span>
              <span>Privacy</span>
            </div>
            <div className="flex gap-2 text-sm text-gray-600 mt-4">
              © GarbhaGudi IVF Center - {new Date().getFullYear()}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-semibold text-brandDark text-base mb-4">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919108910832" className="text-gray-700 hover:text-brandPink transition-colors text-sm">
                  Give us a Call
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@garbhagudi.com"
                  className="text-gray-700 hover:text-brandPink transition-colors text-sm"
                >
                  Write us an Email
                </a>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-2">
            <h3 className="font-semibold text-brandDark text-base mb-4">Our Information</h3>
            <ul className="space-y-3">
              <li>
                <a href="/legal/refund-policy" className="text-gray-700 hover:text-brandPink transition-colors text-sm">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="/legal/privacy-policy" className="text-gray-700 hover:text-brandPink transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/legal/terms-and-conditions" className="text-gray-700 hover:text-brandPink transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="order-4"></div>
        </div>
      </div>
    </footer>
  )
}
