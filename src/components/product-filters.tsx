"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const categories = [
  { id: "electronics", name: "Electronics", count: 2450 },
  { id: "fashion", name: "Fashion", count: 3200 },
  { id: "home", name: "Home & Garden", count: 1800 },
  { id: "sports", name: "Sports", count: 950 },
  { id: "books", name: "Books", count: 1200 },
  { id: "beauty", name: "Beauty", count: 1600 },
]

const brands = [
  { id: "apple", name: "Apple", count: 234 },
  { id: "samsung", name: "Samsung", count: 189 },
  { id: "nike", name: "Nike", count: 156 },
  { id: "adidas", name: "Adidas", count: 134 },
  { id: "sony", name: "Sony", count: 98 },
]

const ratings = [
  { id: "5", name: "5 Stars", count: 1234 },
  { id: "4", name: "4 Stars & Up", count: 2345 },
  { id: "3", name: "3 Stars & Up", count: 3456 },
  { id: "2", name: "2 Stars & Up", count: 4567 },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter))
  }

  const clearAllFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 1000])
  }

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                  {filter}
                  <X className="h-3 w-3 cursor-pointer" onClick={() => removeFilter(filter)} />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider value={priceRange} onValueChange={setPriceRange} max={1000} step={10} className="w-full" />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedFilters.includes(category.name)}
                    onCheckedChange={(checked) => {
                      if (checked) addFilter(category.name)
                      else removeFilter(category.name)
                    }}
                  />
                  <label htmlFor={category.id} className="text-sm cursor-pointer">
                    {category.name}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">({category.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Brands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={brand.id}
                    checked={selectedFilters.includes(brand.name)}
                    onCheckedChange={(checked) => {
                      if (checked) addFilter(brand.name)
                      else removeFilter(brand.name)
                    }}
                  />
                  <label htmlFor={brand.id} className="text-sm cursor-pointer">
                    {brand.name}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">({brand.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ratings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Customer Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ratings.map((rating) => (
              <div key={rating.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={rating.id}
                    checked={selectedFilters.includes(rating.name)}
                    onCheckedChange={(checked) => {
                      if (checked) addFilter(rating.name)
                      else removeFilter(rating.name)
                    }}
                  />
                  <label htmlFor={rating.id} className="text-sm cursor-pointer">
                    {rating.name}
                  </label>
                </div>
                <span className="text-xs text-muted-foreground">({rating.count})</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
