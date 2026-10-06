import React from "react";

const InvestmentSection = () => {
  return (
    <section id="investment" className="py-24 md:py-28 bg-earth-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-kicker mb-3">Own a cottage</p>
          <h2 className="section-title mb-4">
            Investment Opportunity
          </h2>
          <p className="text-lg text-forest-700 max-w-2xl mx-auto font-light">
            Own a cottage at EarthShip Log Cabin, Timau — an eco-tourism
            stake at the foot of Mount Kenya.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/investmentmodel.jpg"
              alt="Investment Model"
              className="rounded-lg shadow-md max-h-80 w-auto object-contain"
            />
            <p className="text-sm text-forest-700 mt-2">
              Sample model of the investment opportunity at EarthShip Log Cabin
              - Timau
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-forest-800 mb-2">
            Proposal Overview
          </h3>
          <p>
            <strong>Gitumbi Farm-Fresh Ltd.</strong> invites you to invest in a
            cottage at the EarthShip Log Cabin, Timau. The lodge is
            located 1.5km from Timau Town on the Laikipia County side, built on
            unique land ideal for ranching and agriculture, and is known for its
            rich wildlife and proximity to Mt. Kenya and the Maasai Mara.
          </p>
          <h4 className="text-xl font-semibold text-forest-700 mt-4 mb-2">
            Facilities & Current Activities
          </h4>
          <ul className="list-disc list-inside text-forest-700 space-y-1">
            <li>
              Club House, 2 Bars, Library, Video Games Room, Sundowner Lounge,
              Veranda, and more
            </li>
            <li>
              Camping, glamping, organic dining, nature walks, darts,
              basketball, and climbing Mt. Kenya
            </li>
            <li>
              Ensuite rooms, organic meals, and a variety of fun activities
            </li>
          </ul>
          <h5 className="text-lg font-semibold text-forest-600 mt-4 mb-1">
            Upcoming Activities
          </h5>
          <ul className="list-disc list-inside text-forest-600 space-y-1 mb-4">
            <li>Golfing</li>
            <li>Ziplining</li>
          </ul>
          <h4 className="text-xl font-semibold text-forest-700 mt-4 mb-2">
            Investment Details
          </h4>
          <ul className="list-disc list-inside text-forest-700 space-y-1">
            <li>Own a cottage on a long-term lease (10 years, renewable)</li>
            <li>
              We build and equip the cottage for you, then you maintain it
            </li>
            <li>
              Cost: Bed Sitter Ksh. 1.5m, 1 Bedroom Ksh. 2m, 2 Bedrooms Ksh.
              2.5m, 3 Bedrooms Ksh. 3m
            </li>
            <li>
              Service charge: <strong>Ksh. 20,000/month</strong> (covers
              maintenance, linen, security; adjustable annually)
            </li>
            <li>
              Owner entitled to free use, can market and sublet, lodge will
              manage guests and remit agreed value to your bank account
            </li>
            <li>All utility bills and equipment renewal covered by owner</li>
            <li>Right of refusal to buy if you wish to sell</li>
          </ul>
          <h4 className="text-xl font-semibold text-forest-700 mt-4 mb-2">
            Contact & Next Steps
          </h4>
          <p>
            For more information or to invest, contact:
            <br />
            <span className="font-semibold">
              Gitumbi Wambugu (CEO/DIRECTOR)
            </span>
            <br />
            Phone/WhatsApp:{" "}
            <a
              href="tel:+254758216350"
              className="text-blue-700 hover:underline"
            >
              +254 758 216 350
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:gitumbi@earthship.co.ke"
              className="text-blue-700 hover:underline"
            >
              gitumbi@earthship.co.ke
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
