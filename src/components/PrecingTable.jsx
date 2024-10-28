import React from "react";

import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import Tooltip from "./ui/QTooltip";

export default function PricingTable({ products, handlerProduct }) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
      {products.map((product, index) => {
        return (
          <Card
            className={`relative w-[330px] p-5 m-2 border rounded-lg cursor-pointer transition-transform transform ${
              !isHovered && products.length - 1 === index
                ? "md:scale-110 shadow-2x1 border-2 border-green-900"
                : "md:hover:scale-110 hover:shadow-2xl hover:border-2 hover:border-green-900"
            }`}
            key={`products-${product.id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              {/* {products.length - 1 === index && (
                <Chip className="bg-teal-700 text-white absolute top-2 right-2 uppercase">
                  <span>1 mes gratis</span>
                </Chip>
              )} */}
              <p className="text-lg uppercase font-bold">{product.name}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2 grid gap-6">
              <div className="flex items-end">
                <h4 className="font-bold text-4xl text-teal-700">
                  ${product.price}
                </h4>
                <small className="text-gray-600 font-semibold mb-1 text-md">
                  /{product.quota}
                </small>
              </div>
              <p className="text-sm text-gray-500">{product.description}</p>
              <Button
                className={`border-teal-700 text-teal-700 ${
                  products.length - 1 === index && "bg-teal-700 text-white"
                } `}
                variant={products.length - 1 === index ? "solid" : "faded"}
                onClick={() => {
                  handlerProduct(product);
                  //   window.open(
                  //     `http://192.168.1.136:3000/?owner_client=${product.bank.acronym}&product_id=${product.id}`,
                  //     "ventana_pequeña",
                  //     "width=600,height=900,top=100,left=200"
                  //   );
                }}
              >
                Contratar
              </Button>
              <ul className="grid gap-2 text-sm" role="list">
                {product.details.map((details, index) => {
                  return (
                    <Tooltip content={details.details} key={index}>
                      <li className="flex" key={index}>
                        <svg
                          className="h-6 w-5 flex-none text-teal-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {details.name}
                      </li>
                    </Tooltip>
                  );
                })}
              </ul>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
