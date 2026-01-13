import React, { useState } from 'react';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Button } from '@/Components/ui/button';
import { Plus, X } from 'lucide-react';

interface JSONArrayInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    helpText?: string;
}

export function JSONArrayInput({ label, value, onChange, placeholder, helpText }: JSONArrayInputProps) {
    const [items, setItems] = useState<string[]>(() => {
        try {
            return value ? JSON.parse(value) : [];
        } catch {
            return [];
        }
    });

    const addItem = () => {
        const newItems = [...items, ''];
        setItems(newItems);
        onChange(JSON.stringify(newItems));
    };

    const updateItem = (index: number, newValue: string) => {
        const newItems = [...items];
        newItems[index] = newValue;
        setItems(newItems);
        onChange(JSON.stringify(newItems.filter(item => item.trim() !== '')));
    };

    const removeItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
        onChange(JSON.stringify(newItems));
    };

    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            {helpText && <p className="text-xs text-stone-500">{helpText}</p>}
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex gap-2">
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(index, e.target.value)}
                            className="flex-1 px-3 py-2 border border-stone-200 rounded-md"
                            placeholder={placeholder}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(index)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addItem}
                    className="w-full"
                >
                    <Plus className="h-4 w-4 mr-2" /> Add Item
                </Button>
            </div>
        </div>
    );
}

interface JSONObjectInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    helpText?: string;
}

export function JSONObjectInput({ label, value, onChange, helpText }: JSONObjectInputProps) {
    const [pairs, setPairs] = useState<Array<{ key: string; value: string }>>(() => {
        try {
            const obj = value ? JSON.parse(value) : {};
            return Object.entries(obj).map(([key, val]) => ({ key, value: String(val) }));
        } catch {
            return [];
        }
    });

    const addPair = () => {
        const newPairs = [...pairs, { key: '', value: '' }];
        setPairs(newPairs);
    };

    const updatePair = (index: number, field: 'key' | 'value', newValue: string) => {
        const newPairs = [...pairs];
        newPairs[index][field] = newValue;
        setPairs(newPairs);

        const obj = newPairs
            .filter(p => p.key.trim() !== '')
            .reduce((acc, p) => ({ ...acc, [p.key]: p.value }), {});
        onChange(JSON.stringify(obj));
    };

    const removePair = (index: number) => {
        const newPairs = pairs.filter((_, i) => i !== index);
        setPairs(newPairs);

        const obj = newPairs
            .filter(p => p.key.trim() !== '')
            .reduce((acc, p) => ({ ...acc, [p.key]: p.value }), {});
        onChange(JSON.stringify(obj));
    };

    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            {helpText && <p className="text-xs text-stone-500">{helpText}</p>}
            <div className="space-y-2">
                {pairs.map((pair, index) => (
                    <div key={index} className="flex gap-2">
                        <input
                            type="text"
                            value={pair.key}
                            onChange={(e) => updatePair(index, 'key', e.target.value)}
                            className="w-1/3 px-3 py-2 border border-stone-200 rounded-md"
                            placeholder="Key (e.g., bestTime)"
                        />
                        <input
                            type="text"
                            value={pair.value}
                            onChange={(e) => updatePair(index, 'value', e.target.value)}
                            className="flex-1 px-3 py-2 border border-stone-200 rounded-md"
                            placeholder="Value (e.g., June-October)"
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removePair(index)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addPair}
                    className="w-full"
                >
                    <Plus className="h-4 w-4 mr-2" /> Add Field
                </Button>
            </div>
        </div>
    );
}
