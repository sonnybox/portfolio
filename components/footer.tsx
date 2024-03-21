interface FooterProps {
    string: string;
}

export default function Footer({ string }: FooterProps) {
    return (
        <div className='p-4 fixed bottom-0 flex items-center justify-center w-screen'>
            <div className='p-1 px-2 text-xs text-white border border-white rounded-full hover:border-black hover:text-black hover:bg-white transition-colors'>
                {string}
            </div>
        </div>
    );
}
