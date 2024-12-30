'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface MenuUploadProps {
  onUploadSuccess: () => void;
}

export function MenuUpload({ onUploadSuccess }: MenuUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
    } else {
      toast({
        title: 'Invalid file type',
        description: 'Please upload a CSV file',
        variant: 'destructive',
      });
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n').map(row => row.split(','));
      
      // Skip header row and process data
      const newItems = rows.slice(1).map(([name, category, price]) => ({
        id: name.toLowerCase().replace(/\s+/g, '-'),
        name: name.trim(),
        category: category.trim(),
        price: parseInt(price.trim(), 10),
      }));

      // Update menu items (in a real app, this would be an API call)
      console.log('New menu items:', newItems);
      
      toast({
        title: 'Menu updated',
        description: `Successfully uploaded ${newItems.length} items`,
      });
      
      onUploadSuccess();
    };

    reader.readAsText(file);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="flex-1"
        />
        <Button onClick={handleUpload} disabled={!file}>
          Upload Menu
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Upload a CSV file with columns: Name, Category, Price
      </p>
    </div>
  );
}