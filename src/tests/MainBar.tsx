import { MainBar } from '@components/main-bar';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Example', () => {
  it('aspect 01', () => {
    render(<MainBar />);
  });
});
