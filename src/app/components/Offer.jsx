import React, { useState, useRef, useEffect } from "react";
import { Gift, X, Sparkles } from "lucide-react";
import { Fireworks } from "@fireworks-js/react";

const Offer = ({ totalAmount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const fireworksRef = useRef(null);
  const discountPercentage = 10;
  const discountAmount = (totalAmount * discountPercentage) / 100;
  const finalAmount = totalAmount - discountAmount;

  useEffect(() => {
    if (isOpen) {
      setShowFireworks(true);
      fireworksRef.current?.start();
    } else {
      fireworksRef.current?.stop();
      setTimeout(() => setShowFireworks(false), 100);
    }
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {showFireworks && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{ zIndex: 9999 }}
        >
          <Fireworks
            ref={fireworksRef}
            options={{ opacity: 0.5 }}
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              background: "transparent",
            }}
          />
        </div>
      )}

      <button
        onClick={toggleModal}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center"
      >
        <Gift className="mr-2" size={20} />
        Special Offer
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                Instant Savings!
              </h2>
              <button
                onClick={toggleModal}
                className="text-white hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-yellow-100 border-yellow-400 p-4 rounded-lg flex items-center">
                <Sparkles className="h-5 w-5 text-yellow-600 mr-2" />
                <div>
                  <div className="text-yellow-800 font-bold">
                    Exclusive Offer
                  </div>
                  <div className="text-yellow-700">
                    {discountPercentage}% OFF your current purchase!
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-2xl font-bold text-green-600">
                  Save ${discountAmount.toFixed(2)} Now!
                </p>
                <p className="mt-2 text-gray-600">
                  Original Total:{" "}
                  <span className="line-through">
                    ${totalAmount.toFixed(2)}
                  </span>
                </p>
                <p className="text-xl font-semibold text-gray-800">
                  New Total: ${finalAmount.toFixed(2)}
                </p>
              </div>
              <p className="mt-4 text-gray-700">
                This amazing discount has been automatically applied to your
                current purchase. Complete your order now to take advantage of
                these instant savings!
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Apply Discount
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
