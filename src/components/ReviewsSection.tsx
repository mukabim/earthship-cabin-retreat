
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: 'March 2024',
      comment: 'Absolutely magical experience! The glamping tent was luxurious yet connected to nature. Perfect for a romantic getaway.',
      accommodation: 'Glamping Retreat',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Ochieng',
      rating: 5,
      date: 'February 2024',
      comment: 'Best camping experience ever! The staff was incredibly helpful and the location is breathtaking. Will definitely come back.',
      accommodation: 'Camping Experience',
      verified: true
    },
    {
      id: 3,
      name: 'Emma & David',
      rating: 4,
      date: 'January 2024',
      comment: 'Great escape from city life. The facilities were clean and well-maintained. Loved the campfire evenings!',
      accommodation: 'Camping Experience',
      verified: true
    },
    {
      id: 4,
      name: 'Grace Wanjiku',
      rating: 5,
      date: 'December 2023',
      comment: 'Perfect for our family vacation. Kids loved the nature trails and the glamping tent was spacious and comfortable.',
      accommodation: 'Glamping Retreat',
      verified: true
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'sm') => {
    const stars = [];
    const starSize = size === 'lg' ? 'text-2xl' : 'text-sm';
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`${starSize} ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Review:', newReview);
    alert('Thank you for your review! It will be published after verification.');
    setNewReview({ name: '', email: '', rating: 5, comment: '' });
    setShowReviewForm(false);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-earth-50 to-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
            Guest Reviews
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              {renderStars(Math.round(averageRating), 'lg')}
              <span className="text-2xl font-bold text-forest-900">{averageRating.toFixed(1)}</span>
            </div>
            <Badge className="bg-earth-500 text-white">
              {reviews.length} Reviews
            </Badge>
          </div>
          <p className="text-xl text-forest-700 max-w-2xl mx-auto">
            See what our guests are saying about their EarthShip experience
          </p>
        </div>

        {/* Review Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="card-earth min-h-[300px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-earth-50/30"></div>
            <CardContent className="relative z-10 p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {renderStars(reviews[currentReview].rating, 'lg')}
                </div>
                
                <blockquote className="text-xl text-forest-800 mb-6 italic leading-relaxed">
                  "{reviews[currentReview].comment}"
                </blockquote>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <p className="font-semibold text-forest-900 text-lg">
                      {reviews[currentReview].name}
                    </p>
                    {reviews[currentReview].verified && <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50">✓ Verified Stay</Badge>}
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-forest-600">
                    <span>{reviews[currentReview].date}</span>
                    <span>•</span>
                    <span>{reviews[currentReview].accommodation}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            
            {/* Navigation buttons */}
            <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={prevReview}
                className="bg-white/90 border-earth-200 hover:bg-white"
              >
                ←
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextReview}
                className="bg-white/90 border-earth-200 hover:bg-white"
              >
                →
              </Button>
            </div>
          </Card>

          {/* Review indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-earth-500' : 'bg-earth-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review) => (
            <Card key={review.id} className="card-earth hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold text-forest-900">{review.name}</h4>
                    {review.verified && <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50 text-xs">✓</Badge>}
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <div className="text-sm text-forest-600">
                  {review.date} • {review.accommodation}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-forest-700 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Write a Review */}
        <div className="max-w-2xl mx-auto">
          {!showReviewForm ? (
            <Card className="card-earth text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-forest-900 mb-4">
                  Share Your Experience
                </h3>
                <p className="text-forest-700 mb-6">
                  Help others discover the magic of EarthShip by sharing your review
                </p>
                <Button
                  onClick={() => setShowReviewForm(true)}
                  className="btn-earth"
                >
                  Write a Review
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="card-earth">
              <CardHeader>
                <CardTitle className="text-forest-900">Write Your Review</CardTitle>
                <CardDescription>Share your experience with future guests</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reviewName" className="text-forest-900">Your Name *</Label>
                      <Input
                        id="reviewName"
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        className="mt-2"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="reviewEmail" className="text-forest-900">Email Address *</Label>
                      <Input
                        id="reviewEmail"
                        type="email"
                        required
                        value={newReview.email}
                        onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-forest-900">Rating *</Label>
                    <div className="flex items-center space-x-2 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating: star})}
                          className={`text-2xl ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-500 transition-colors`}
                        >
                          ★
                        </button>
                      ))}
                      <span className="text-forest-700 ml-2">({newReview.rating} star{newReview.rating !== 1 ? 's' : ''})</span>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reviewComment" className="text-forest-900">Your Review *</Label>
                    <textarea
                      id="reviewComment"
                      required
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      className="mt-2 w-full p-3 border border-earth-200 rounded-md resize-none"
                      rows={4}
                      placeholder="Tell us about your experience at EarthShip..."
                    />
                  </div>

                  <div className="flex space-x-4">
                    <Button type="submit" className="btn-earth flex-1">
                      Submit Review
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowReviewForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
