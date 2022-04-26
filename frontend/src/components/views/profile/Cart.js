import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiPresent } from "react-icons/gi";
import { BsTrashFill } from "react-icons/bs";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import Ripples from "react-ripples";

export default function Cart() {
  return (
    <div
      id="cart"
      className="bg-white px-3 py-10 shadow rounded border-t-4 border-yellow-400"
    >
      <div className="flex items-center text-2xl text-gray-900 mb-4">
        <span clas="text-yellow-500">
          <AiOutlineShoppingCart className="mr-2" size={30} />
        </span>
        <span className="tracking-wide">My Shipping Cart</span>
        <span className="ml-1 hover:underline hover:underline-offset-[5px] hover:decoration-2 hover:decoration-yellow-400">
          (3)
        </span>
      </div>

      {/* products in cart deatils */}

      <div className="flex justify-center my-2 px-2">
        <div className="flex flex-col w-full text-gray-800  pin-r pin-y">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">
                    Unit price
                  </th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img
                        src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg"
                        className="w-20 rounded"
                        alt="Thumbnail"
                      ></img>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <p className="mb-2 md:ml-4">Earphone</p>
                      <form action="" method="POST">
                        <button type="submit" className="text-gray-700 md:ml-4">
                          <small>(Remove item)</small>
                        </button>
                      </form>
                    </a>
                  </td>
                  <td className="justify-center md:justify-end md:flex mt-6">
                    <div className="w-20 h-10">
                      <div className="relative flex flex-row w-full h-8">
                        <input
                          type="number"
                          defaultValue="1"
                          className="w-full p-2 font-semibold text-center text-gray-700 bg-yellow-200 outline-none rounded-lg focus:outline-none hover:text-black focus:text-black"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                      10.00€
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                      20.00€
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img
                        src="https://limg.app/i/Cute-Constrictor-Super-Sexy-Military-Enforcer-W7mvBp.png"
                        className="w-20 rounded"
                        alt="Thumbnail"
                      ></img>
                    </a>
                  </td>
                  <td>
                    <p className="mb-2 md:ml-4">Tesla Model 3</p>
                    <form action="" method="POST">
                      <button type="submit" className="text-gray-700 md:ml-4">
                        <small className="hover:text-yellow-700">
                          (Remove item)
                        </small>
                      </button>
                    </form>
                  </td>
                  <td className="justify-center md:justify-end md:flex md:mt-4">
                    <div className="w-20 h-10">
                      <div className="relative flex flex-row w-full h-8">
                        <input
                          type="number"
                          defaultValue="1"
                          className="w-full p-2 font-semibold text-center text-gray-700 bg-yellow-200 outline-none rounded-lg focus:outline-none hover:text-black focus:text-black"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                      49,600.01€
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                      148,800.03€
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img
                        src="https://limg.app/i/Successful-Spider-Biblical-Mutant---Total-War-lKoE7D.jpeg"
                        className="w-20 rounded"
                        alt="Thumbnail"
                      ></img>
                    </a>
                  </td>
                  <td>
                    <p className="mb-2 md:ml-4">Bic 4 colour pen</p>
                    <form action="" method="POST">
                      <button type="submit" className="text-gray-700 md:ml-4">
                        <small>(Remove item)</small>
                      </button>
                    </form>
                  </td>
                  <td className="justify-center md:justify-end md:flex md:mt-8">
                    <div className="w-20 h-10">
                      <div className="relative flex flex-row w-full h-8">
                        <input
                          type="number"
                          defaultValue="1"
                          className="w-full p-2 font-semibold text-center text-gray-700 bg-yellow-200 outline-none rounded-lg focus:outline-none hover:text-black focus:text-black"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                      1.50€
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                      7.50€
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <hr className="pb-6 mt-6"></hr>
            {/* coupon deatils */}

            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-yellow-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div className="justify-center md:flex">
                    <form action="" method="POST">
                      <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                        <input
                          type="coupon"
                          name="code"
                          id="coupon"
                          placeholder="Apply coupon"
                          className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                        />
                        <Ripples
                          className="!block !overflow-clip"
                          color={"rgba(253,128,36,.1)"}
                          during={2200}
                        >
                          <button
                            type="submit"
                            className="text-sm flex items-center px-3 py-1 text-white bg-[rgb(253,128,36)] border-2 border-[rgb(253,128,36)] rounded-full outline-none md:px-4   transition-all duration-[350ms] ease-in-out hover:bg-white hover:text-black  
                          focus:bg-white focus:text-black   focus:outline-none active:outline-none"
                          >
                            <GiPresent size={50} />
                            <span className="font-medium">Apply coupon</span>
                          </button>
                        </Ripples>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* order deatils */}
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-yellow-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">
                    Shipping and additionnal costs are calculated based on
                    values you have entered
                  </p>
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      148,827.53€
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                      <form action="" method="POST">
                        <button type="submit" className="mr-2 mt-1 lg:mt-2">
                          <BsTrashFill
                            size={20}
                            className="text-red-600 hover:text-red-800"
                          />
                        </button>
                      </form>
                      Coupon "90off"
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                      -133,944.77€
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      New Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      14,882.75€
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tax
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      2,976.55€
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Shipping Cost
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      2,976.55€
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      17,859.3€
                    </div>
                  </div>
                  <Ripples
                    className="!block mt-6"
                    color={"rgba(253,128,36,.1)"}
                    during={2200}
                  >
                    <button
                      className="flex justify-center items-center w-full px-10 py-3  font-medium text-white bg-[rgb(253,128,36)] border-2 border-[rgb(253,128,36)] rounded-full outline-none transition-all duration-[350ms] ease-in-out hover:bg-white hover:text-black  
                          focus:bg-white focus:text-black uppercase  rounded-full shadow item-center  focus:outline-none"
                    >
                      <BsFillCreditCard2FrontFill size={30} />
                      <span className="ml-2 mt-5px">Procceed to checkout</span>
                    </button>
                  </Ripples>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
