import React from 'react';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  specs: string[];
  image: string;
  category: CategoryId;
  flag?: string; // Emoji flag
  isBestSeller?: boolean;
}

export type CategoryId = 'vps' | 'game' | 'cloud' | 'dedicated' | 'domain' | 'services';

export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}