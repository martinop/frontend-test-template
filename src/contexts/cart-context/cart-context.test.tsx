import { act, renderHook } from "@testing-library/react";
import { CartProvider, useCart } from "./cart-context";
import { Game } from "@/types";

const mockGame: Game = {
  id: "1",
  name: "Test Game",
  genre: "Action",
  price: 59.99,
  image: "/test-image.jpg",
  isNew: false,
  description: "Description",
};

describe("CartProvider and useCart", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("provides initial empty cart", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );
    const { result } = renderHook(() => useCart(), { wrapper });
    expect(result.current.items).toEqual([]);
  });

  it("adds item to cart", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockGame);
    });

    expect(result.current.items).toEqual([mockGame]);
  });

  it("removes item from cart", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockGame);
    });

    act(() => {
      result.current.removeItem(mockGame.id);
    });

    expect(result.current.items).toEqual([]);
  });

  it("does not add duplicate items", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockGame);
      result.current.addItem(mockGame);
    });

    expect(result.current.items).toEqual([mockGame]);
  });

  it("persists cart to localStorage", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addItem(mockGame);
    });

    expect(JSON.parse(localStorage.getItem("cart") || "[]")).toEqual([
      mockGame,
    ]);
  });

  it("loads cart from localStorage", () => {
    localStorage.setItem("cart", JSON.stringify([mockGame]));

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <CartProvider>{children}</CartProvider>
    );
    const { result } = renderHook(() => useCart(), { wrapper });

    expect(result.current.items).toEqual([mockGame]);
  });

  it("throws error when useCart is used outside of CartProvider", () => {
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => {
      renderHook(() => useCart());
    }).toThrow("useCart must be used within a CartProvider");

    consoleErrorSpy.mockRestore();
  });
});
