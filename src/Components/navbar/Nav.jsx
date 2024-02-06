import React, { useState } from "react";
import download from "../../assets/download.png";
import { FaCaretDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import Responsive from "./Responsive";

const Nav = () => {
  const [showSideMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu(!showSideMenu);
  };

  return (
    <>
      <header className="md:fixed left-0 right-0 z-[99] ">
        <nav className="container flex items-center justify-between h-[70px] py-2">
          <div>
            <a href="#">
              <img src={download} alt="" srcset="" className="w-[60px]" />
            </a>
          </div>

          <div className="hidden md:block">

            <ul className="flex gap-10 items-center">
              {/* ---------------------------------------------------DOG-------------------------- */}
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[100px]">
                  Dogs
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute left-0 z-[99999] w-full hidden p-9 rounded-b-3xl text-black shadow-md group-hover:block">
                  <div className="grid grid-rows-2 divide-y divide-slate-600">
                    <div className="grid grid-cols-6 gap-5 p-3">
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG TREATS
                        </h3>
                        <p>Biscuits, Cookies & Snacks</p>
                        <p>Chew Bones</p>
                        <p>Chew Sticks</p>
                        <p>Other Treats</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG TOYS
                        </h3>
                        <p>Rope Toys</p>
                        <p>Chew Toys</p>
                        <p>Plush & Squeaky Toys</p>
                        <p>Interactive & Puzzle Toys</p>
                        <p>Tough Chewers</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG GROOMING SUPPLIES
                        </h3>
                        <p>Shampoo, Conditioner & Drybath</p>
                        <p>Paw Care</p>
                        <p>Grooming Wipes</p>
                        <p>Perfume & Deodorizer</p>
                        <p>Brushes & Combs</p>
                        <p>Other Grooming Supplies</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG BOWL & FEEDERS
                        </h3>
                        <p>Water Bottle</p>
                        <p>Bowl</p>
                        <p>Lick Mats</p>
                        <p>Slow Feeder</p>
                        <p>Snuffle Mats</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG OUTDOOR SUPPLIES
                        </h3>
                        <p>Travel Cage</p>
                        <p>Transparent Bags</p>
                        <p>Airline Bags</p>
                        <p>Travel Bowl & Bottle</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG APPAREL & ACCESSORIES
                        </h3>
                        <p>Leashes</p>
                        <p>Collars Set</p>
                        <p>Harnesses Set</p>
                        <p>Bandana</p>
                        <p>Winter Jacket</p>
                      </div>
                    </div>
                    {/* ----------------------------------------SECOND ROW---------------------------------------------- */}
                    <div className="grid grid-cols-6 gap-5 p-3">
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG LITTER & HOUSEBREAKING
                        </h3>
                        <p>Pooper Scooper & Bags</p>
                        <p>Diaper & Potty Training</p>
                        <p>Odor & Stain Remover</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG FLEA & TICK CONTROL
                        </h3>
                        <p>Flea & Tick Shampoo & Dry Bath</p>
                        <p>Flea & Tick Powder</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG TRAINING & BEHAVIOUR
                        </h3>
                        <p>Training Clicker</p>
                        <p>Training Stick</p>
                        <p>Training Whistle</p>
                        <p>Training Pad</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG HOUSE, BED & MAT
                        </h3>
                        <p>House</p>
                        <p>Bed</p>
                        <p>Mat & Mattress</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG HEALTH SUPPLIES
                        </h3>
                        <p>Suppliements & Vitamins</p>
                        <p>Dental Care</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          DOG FOOD
                        </h3>
                        {/* <p>Suppliements & Vitamins</p>
                      <p>Dental Care</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* ---------------------------------------------------CAT----------------------------------- */}
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[100px]">
                  CATS
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute left-0 z-[99999] w-full hidden p-9 rounded-b-3xl text-black shadow-md group-hover:block">
                  <div className="grid grid-rows-2 divide-y divide-slate-600">
                    <div className="grid grid-cols-6 gap-5 p-3">
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT OUTDOOR SUPPLIES
                        </h3>
                        <p>Travel Cage</p>
                        <p>Transparent Bags</p>
                        <p>Airline Bags</p>
                        <p>Travel Bowl & Bottle</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT GROOMING SUPPLIES
                        </h3>
                        <p>Shampoo & Dry Bath</p>
                        <p>Perfumes & Deodorizers</p>
                        <p>Paw Care</p>
                        <p>Brushes & Combs</p>
                        <p>Grooming Wipes</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT LITTER & HOUSEBREAKING
                        </h3>
                        <p>Litters & Sands</p>
                        <p>Pooper Scooper</p>
                        <p>Litter Trays</p>
                        <p>Odor & Stain Remover</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT TOYS
                        </h3>
                        <p>Interactive Toys</p>
                        <p>Scratchers</p>
                        <p>Teasers & Wands</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT TREAT
                        </h3>
                        <p>Jerky</p>
                        <p>Snacks</p>
                      </div>

                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT FLEA & TICK CONTROL
                        </h3>
                        <p>Flea & Tick Shampoo & Dry Bath</p>
                        <p>Flea & Tick Powder</p>
                      </div>
                    </div>
                    {/* ----------------------------------------SECOND ROW---------------------------------------------- */}
                    <div className="grid grid-cols-6 p-3">
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT BOWL & FEEDER
                        </h3>
                        <p>Bowl</p>
                        <p>Water Bottle</p>
                        <p>Lick Mats</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT APPAREL & ACCESSORIES
                        </h3>
                        <p>Collars</p>
                        <p>Leashes</p>
                        <p>Harnesses</p>
                        <p>Winter Jacket</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT HEALTH SUPPLIES
                        </h3>
                        <p>Dental Care</p>
                      </div>
                      <div className="">
                        <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                          CAT FOOD
                        </h3>
                        {/* <p>Suppliements & Vitamins</p>
                      <p>Dental Care</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* ----------------------------------------------FISH & AQUATICS--------------------------------- */}
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[100px]">
                  FISH & AQUATICS
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute left-0 z-[99999] w-full hidden p-9 rounded-b-3xl text-black shadow-md group-hover:block">
                  <div className="grid grid-cols-6 gap-5">
                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        FISH & AQUATIC FOOD
                      </h3>
                      <p>Fish Food</p>
                      <p>Turtle Food</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        AQUARIUM ACCESSORIES
                      </h3>
                      <p>Pumps & Filters</p>
                      <p>Heaters & Cleaners</p>
                      <p>Other Tools</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        AQUARIUM DECOR
                      </h3>
                      <p>Stones</p>
                      <p>Gravel & Sand</p>
                      <p>Marble</p>
                      <p>Decorative Ornaments</p>
                      <p>Plastic Plants</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        MEDICATION & HEALTH
                      </h3>
                      <p>Water & Pond Treatment</p>
                      <p>Fish Health & Medicine</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        TURTLE HOUSE
                      </h3>
                    </div>
                  </div>
                </div>
              </li>
              {/* ---------------------------------------------------BIRDS------------------------------------------ */}
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[100px]">
                  BIRDS
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute left-0 z-[99999] w-full hidden p-9 rounded-b-3xl text-black shadow-md group-hover:block">
                  <div className="grid grid-cols-6 gap-5">
                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        BIRD FOOD
                      </h3>
                      <p>Seeds</p>
                      <p>Hand Feeding</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        BIRD GROOMING SUPPLIES
                      </h3>
                      <p>Shampoo & Dry Bath</p>
                      <p>Grooming Wipes</p>
                      <p>Combs</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        BIRD CAGE & ACCESSORIES
                      </h3>
                      <p>Perches</p>
                      <p>Swings</p>
                      <p>Ladder</p>
                      <p>Nest</p>
                      <p>Cage</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        BIRD TOYS
                      </h3>
                      <p>Wooden Toy</p>
                      <p>Hanging Perch</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        BIRD FEEDER
                      </h3>
                      <p>Hanging Feeder</p>
                      <p>Bowl</p>
                      <p>Cage Bottle</p>
                    </div>
                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        BIRD HEALTH SUPPLIES
                      </h3>
                      <p>Suppliments</p>
                    </div>
                  </div>
                </div>
              </li>
              {/* -------------------------------------------------SMALL ANIMALS-------------------------------------- */}
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[100px]">
                  SMALL ANIMALS
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute left-0 z-[99999] w-full hidden p-9 rounded-b-3xl text-black shadow-md group-hover:block">
                  <div className="grid grid-cols-6 gap-5">
                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        SMALL ANIMALS FOOD
                      </h3>
                      <p>Guinea Pig Food</p>
                      <p>Rabbit Food</p>
                      <p>Hamster Food</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        GROOMING SUPPLIES
                      </h3>
                      <p>Shampoo & Dry Bath</p>
                      <p>Perfume & Deodorizer</p>
                      <p>Grooming Wipes</p>
                      <p>Combs</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        BOWL & FEEDER
                      </h3>
                      <p>Bowls</p>
                      <p>Water Bottle</p>
                    </div>

                    <div className="">
                      <h3 className="font-semibold text-2xl text-amber-950 mb-3">
                        LITTER & HOUSEBREAKING
                      </h3>
                      <p>Litter & Sand</p>
                      <p>Odor & Stain Remover</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center divide-x divide-gray-700 gap-4">
                  <div className="flex gap-2">
                    <FaRegUser className="cursor-pointer" size={22} />
                    <LuShoppingCart className="cursor-pointer" size={22}/>
                  </div>
                  <div className="p-2">
                  <a href="#" className="h-[100px] font-medium">
                    Contact Us
                  </a>
                </div>
                </div>

              </li>
            </ul>
          </div>
          <div className="items-center md:hidden">
            {showSideMenu ? (
              <HiMenuAlt1
                onClick={toggleMenuHandler}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenuHandler}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <Responsive showSideMenu={showSideMenu} />
    </>
  );
};

export default Nav;
