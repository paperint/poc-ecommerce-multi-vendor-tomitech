/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus, Trash2, Heart } from "lucide-react";
import Link from "next/link";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    vendor: string;
    vendorId: number;
    quantity: number;
    inStock: boolean;
    maxQuantity: number;
    attributes?: {
      color?: string;
      size?: string;
      variant?: string;
    };
  };
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onMoveToWishlist: (id: number) => void;
}

export function CartItem({
  item,
  onQuantityChange,
  onRemove,
  onMoveToWishlist,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= item.maxQuantity) {
      setQuantity(newQuantity);
      onQuantityChange(item.id, newQuantity);
    }
  };

  const subtotal = item.price * quantity;

  return (
    <div className="flex gap-4 p-4 border rounded-lg">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <Link href={`/product/${item.id}`}>
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div className="flex-1">
            <Link href={`/product/${item.id}`}>
              <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">
                {item.name}
              </h3>
            </Link>

            <Link href={`/vendor/${item.vendorId}`}>
              <p className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sold by {item.vendor}
              </p>
            </Link>

            {/* Product Attributes */}
            {item.attributes && (
              <div className="flex gap-2 mt-2">
                {item.attributes.color && (
                  <Badge variant="outline" className="text-xs">
                    Color: {item.attributes.color}
                  </Badge>
                )}
                {item.attributes.size && (
                  <Badge variant="outline" className="text-xs">
                    Size: {item.attributes.size}
                  </Badge>
                )}
                {item.attributes.variant && (
                  <Badge variant="outline" className="text-xs">
                    {item.attributes.variant}
                  </Badge>
                )}
              </div>
            )}

            {/* Stock Status */}
            <div className="mt-2">
              {item.inStock ? (
                <Badge className="bg-green-100 text-green-800 text-xs">
                  In Stock
                </Badge>
              ) : (
                <Badge variant="destructive" className="text-xs">
                  Out of Stock
                </Badge>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${item.price}</span>
              {item.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${item.originalPrice}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Quantity and Actions */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1 || !item.inStock}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= item.maxQuantity || !item.inStock}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            {/* Quantity Selector for larger quantities */}
            <Select
              value={quantity.toString()}
              onValueChange={(value) =>
                handleQuantityChange(Number.parseInt(value))
              }
              disabled={!item.inStock}
            >
              <SelectTrigger className="w-20 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: Math.min(item.maxQuantity, 10) },
                  (_, i) => i + 1
                ).map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <p className="text-xs text-muted-foreground">
              {item.maxQuantity} available
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onMoveToWishlist(item.id)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Heart className="h-4 w-4 mr-1" />
              Save
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(item.id)}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
