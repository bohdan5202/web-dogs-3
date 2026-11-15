import { Service, signal } from '@angular/core';

import type { Breed } from './breed';

@Service()
export class Breeds {

  private favouriteID= signal<number[]>([]);

  private breeds: Breed[] = [
    {
      id: 1,
      name: 'Siberian Husky',
      description:
        'A sled dog bred by the Chukchi people to haul loads over long distances. Huskies need a lot of exercise, handle frost with ease and rarely bark, but they love to howl.',
      image: 'assets/breeds/husky.jpg',
      size: 'large',
      temperament: 'Energetic, friendly, independent',
    },
    {
      id: 2,
      name: 'Labrador Retriever',
      description:
        'One of the most popular breeds in the world, originally from the Canadian island of Newfoundland. Labradors are easy to train, adore water and often work as guide and rescue dogs.',
      image: 'assets/breeds/labrador.jpg',
      size: 'large',
      temperament: 'Gentle, outgoing, obedient',
    },
    {
      id: 3,
      name: 'German Shepherd',
      description:
        'Developed in Germany at the end of the 19th century for herding sheep. Its intelligence and stamina made it the leading working dog in police and military service.',
      image: 'assets/breeds/german-shepherd.jpg',
      size: 'large',
      temperament: 'Smart, loyal, courageous',
    },
    {
      id: 4,
      name: 'Pembroke Welsh Corgi',
      description:
        'A herding dog from Wales with short legs and a fox-like face. Despite their small size, corgis are very active and need long daily walks.',
      image: 'assets/breeds/corgi.jpg',
      size: 'small',
      temperament: 'Cheerful, clever, stubborn',
    },
    {
      id: 5,
      name: 'Beagle',
      description:
        'An English scent hound with an exceptional nose, originally used for hunting hares. Beagles get along great with children, but on a walk they easily follow a trail and run off.',
      image: 'assets/breeds/beagle.jpg',
      size: 'medium',
      temperament: 'Curious, merry, vocal',
    },
    {
      id: 6,
      name: 'French Bulldog',
      description:
        'A compact companion dog with distinctive bat-like ears. It feels at home in an apartment and does not need intense exercise, but it tolerates heat poorly.',
      image: 'assets/breeds/french-bulldog.jpg',
      size: 'small',
      temperament: 'Calm, affectionate, playful',
    },
    {
      id: 7,
      name: 'Border Collie',
      description:
        'A herding breed from the border country of England and Scotland, widely considered the smartest dog in the world. Border Collies need constant tasks for body and mind, otherwise they get bored and mischievous.',
      image: 'assets/breeds/border-collie.jpg',
      size: 'medium',
      temperament: 'Hardworking, attentive, highly intelligent',
    },
    {
      id: 8,
      name: 'Shiba Inu',
      description:
        'An ancient Japanese hunting breed with a thick red coat and a curled tail. Shibas are as clean as cats and bond closely with their owner, but keep their distance from strangers.',
      image: 'assets/breeds/shiba.jpg',
      size: 'medium',
      temperament: 'Independent, tidy, reserved',
    },
  ]


  getAll(): Breed[] {
    return this.breeds;
  }

  getById(id: number): Breed | undefined {
    return this.breeds.find((breed) => breed.id === id);
  }

  isFavourite(id: number): boolean {
    return this.favouriteID().includes(id);
  }

    toggleFavourite(id: number):void{
    if(this.isFavourite(id)){
      this.favouriteID.update(ids => ids.filter(x => x !== id))
    } else {
      this.favouriteID.update(ids => [... ids , id])
    }
  }

  getFavourites():Breed[] {
    return this.breeds.filter(breed => this.favouriteID().includes(breed.id))
  }
}
