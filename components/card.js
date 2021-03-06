import Link from 'next/link'

import { useCart } from '../hooks/useCart'
import CustomButton from './custom-button'
import Heart from './heart'

export default function Card ({ item }) {
  const { id, brand, price, model, refCode, cover, images } = item
  const { addItem } = useCart()

  const pdpLink = `/product/${id}`

  const addToCart = () => addItem({ id, brand, model, price, refCode, cover, images, quantity: 1 })

  const imageUrl = cover.url

  return (
    <div className='bg-white rounded-lg shadow-lg'>
      <div className='relative p-2'>
        <Heart size='10' itemId={item.id} />
        <Link href={pdpLink}>
          <a>
            <img src={imageUrl} />
          </a>
        </Link>

        <div className='px-4'>

          <Link href={pdpLink}>
            <a>
              <h3 className='lg:text-center'>{refCode}</h3>
            </a>
          </Link>

          <Link href={pdpLink}>
            <a>
              <h2 className='text-2xl lg:text-center'>
                <span className=''>{brand}</span> <span className=''>{model}</span>
              </h2>
            </a>
          </Link>
        </div>

        <div className='flex items-center justify-center w-full py-4'>
          <CustomButton
            width='w-11/12'
            onClick={addToCart}
          >
            <p className='block'>{`Add to cart $${price}`}</p>
          </CustomButton>
        </div>
      </div>
    </div>
  )
}
