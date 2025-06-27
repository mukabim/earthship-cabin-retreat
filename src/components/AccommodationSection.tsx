
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AccommodationSection = () => {
  const accommodations = [
    {
      id: 1,
      name: 'Camping Experience',
      price: 'KES 2,000',
      period: 'per night',
      image: 'camping',
      features: [
        'Tent setup area',
        'Shared bathroom facilities',
        'Campfire area',
        'Basic cooking facilities',
        'Nature trails access'
      ],
      description: 'Perfect for adventurous souls who want to connect with nature',
      availability: 'Available',
      popular: false
    },
    {
      id: 2,
      name: 'Glamping Retreat',
      price: 'KES 4,000',
      period: 'per night',
      image: 'glamping',
      features: [
        'Luxury furnished tent',
        'Private bathroom',
        'Comfortable bedding',
        'Mini kitchenette',
        'Private deck area',
        'Breakfast included'
      ],
      description: 'Luxury camping experience with all modern amenities',
      availability: 'Available',
      popular: true
    }
  ];

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accommodation" className="py-20 bg-gradient-to-br from-gray-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Our Accommodation
          </h2>
          <p className="text-xl text-forest-700 max-w-2xl mx-auto">
            Choose your perfect escape - from rustic camping to luxurious glamping
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {accommodations.map((accommodation) => (
            <Card key={accommodation.id} className="card-earth group hover:scale-105 transition-all duration-300 relative overflow-hidden">
              {accommodation.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-earth-500 text-white font-semibold">Most Popular</Badge>
                </div>
              )}
              
              {/* Image placeholder */}
              <div className="h-64 bg-gradient-to-br from-forest-400 to-earth-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-2">
                      {accommodation.image === 'camping' ? '⛺' : '🏕️'}
                    </div>
                    <p className="text-lg font-semibold">{accommodation.name}</p>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-forest-900">{accommodation.name}</CardTitle>
                    <CardDescription className="text-forest-600 mt-2">
                      {accommodation.description}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-earth-600">{accommodation.price}</div>
                    <div className="text-sm text-forest-600">{accommodation.period}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-forest-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {accommodation.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-forest-700">
                        <div className="w-2 h-2 bg-earth-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className="text-green-700 border-green-300 bg-green-50"
                  >
                    ✓ {accommodation.availability}
                  </Badge>
                  
                  <Button 
                    onClick={scrollToBooking}
                    className="btn-earth"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-earth-200">
            <h3 className="text-2xl font-bold text-forest-900 mb-4">
              Ready for Your Adventure?
            </h3>
            <p className="text-forest-700 mb-6">
              Book now and experience the perfect blend of comfort and nature
            </p>
            <Button 
              onClick={scrollToBooking}
              className="btn-earth text-lg px-8"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
