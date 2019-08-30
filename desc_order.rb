def descending_order(n)
  n < 10 ? n : n.to_s.split("").sort.reverse.join("").to_i
end
