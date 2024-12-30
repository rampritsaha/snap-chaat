'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { MenuTable } from './menu-table';
import { MenuUpload } from './menu-upload';

export function MenuManagement() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="container mx-auto p-4 space-y-4">
      <Card className="p-4">
        <h1 className="text-2xl font-bold mb-4">Menu Management</h1>
        <MenuUpload onUploadSuccess={() => setRefreshKey(prev => prev + 1)} />
      </Card>
      <MenuTable key={refreshKey} />
    </div>
  );
}