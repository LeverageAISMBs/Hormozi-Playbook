
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { bookSummaries } from '../constants';

type BookKey = 'offers' | 'leads' | 'closing';

const BookTrilogy: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<BookKey | null>(null);

    const synopsis = selectedBook ? bookSummaries[selectedBook] : {
        title: "Click a book above",
        text: "Please select a book to see its summary."
    };

    const BookCard: React.FC<{ bookKey: BookKey; title: string; subtitle: string; }> = ({ bookKey, title, subtitle }) => (
        <div
            onClick={() => setSelectedBook(bookKey)}
            className={`bg-white p-6 rounded-xl shadow-lg cursor-pointer text-center w-60 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${selectedBook === bookKey ? 'ring-2 ring-teal-500 scale-105' : ''
                }`}
        >
            <h3 className="text-lg font-bold text-teal-700">{title}</h3>
            <span className="text-sm text-gray-600">{subtitle}</span>
        </div>
    );

    return (
        <PageWrapper
            title="The $100M Book Trilogy"
            description="Hormozi's three core books create a complete, systematic funnel for business acquisition. They are not isolated ideas but a logical sequence: create an irresistible product (Offer), get it in front of people (Leads), and convert them (Closing). Click each book in the diagram to read its synopsis."
        >
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                <BookCard bookKey="offers" title="$100M Offers" subtitle="1. The Product" />
                <span className="text-4xl font-light text-slate-500 transform rotate-90 md:rotate-0">&rarr;</span>
                <BookCard bookKey="leads" title="$100M Leads" subtitle="2. The Marketing" />
                <span className="text-4xl font-light text-slate-500 transform rotate-90 md:rotate-0">&rarr;</span>
                <BookCard bookKey="closing" title="$100M Closing" subtitle="3. The Sale" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl max-w-3xl mx-auto min-h-[200px]">
                <h4 className="text-xl font-semibold text-slate-800 mb-3">{synopsis.title}</h4>
                <p className="text-gray-700 leading-relaxed">{synopsis.text}</p>
            </div>
        </PageWrapper>
    );
};

export default BookTrilogy;
