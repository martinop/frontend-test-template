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
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });
    expect(result.current.items).toEqual([]);
  });

  it("adds item to cart and updates localStorage", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(async () => {
      result.current.addItem(mockGame);
    });

    // Verificar estado interno
    expect(result.current.items).toEqual([mockGame]);
    // Verificar localStorage
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    expect(savedCart).toEqual([mockGame]);
  });

  it("removes item from cart and updates localStorage", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(async () => {
      result.current.addItem(mockGame);
      result.current.removeItem(mockGame.id);
    });

    expect(result.current.items).toEqual([]);
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    expect(savedCart).toEqual([]);
  });

  it("does not add duplicate items", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(async () => {
      result.current.addItem(mockGame);
      result.current.addItem(mockGame);
    });

    expect(result.current.items).toEqual([mockGame]);
  });

  it("loads cart from localStorage on hydration", () => {
    localStorage.setItem("cart", JSON.stringify([mockGame]));

    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    // Esperar a que se complete la hidratación
    expect(result.current.items).toEqual([mockGame]);
  });

  it("throws error when useCart is used outside of CartProvider", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => {
      renderHook(() => useCart());
    }).toThrow("useCart must be used within a CartProvider");

    consoleSpy.mockRestore();
  });

  it("updates localStorage when items change", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartProvider,
    });

    await act(async () => {
      result.current.addItem(mockGame);
    });

    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    expect(savedCart).toEqual([mockGame]);

    await act(async () => {
      result.current.removeItem(mockGame.id);
    });

    const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    expect(updatedCart).toEqual([]);
  });
});
