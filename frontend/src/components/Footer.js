const Footer = () => {
    return (
        <footer className="bg-slate-800 w-full text-white">
            <div className="px-4 py-6 grid grid-cols-3 md:gap-4 gap-2">
                <div className="font-bold text-center">Mongsueที่แปลว่ามือสอง</div>
                <div className="font-bold text-center">ศูนย์ช่วยเหลือ</div>
                <div className="font-bold text-center">ติดตามเรา</div>

                <div className="md:text-sm text-xs text-center">เกี่ยวกับเรา</div>
                <div className="md:text-sm text-xs text-center">admin@mongsue.com</div>
                <div className="md:text-sm text-xs text-center">
                    <a className="hover:text-gray-400" href="https://www.facebook.com">Facebook</a>
                </div>

                <div className="md:text-sm text-xs text-center">ร่วมงานกับเรา</div>
                <div className="md:text-sm text-xs text-center">โทร 0123445678</div>
                <div className="md:text-sm text-xs text-center">
                    <a className="hover:text-gray-400" href="https://www.instagram.com">Instragram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer