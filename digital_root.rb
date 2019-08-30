# Same solution for digital root that I provided in javascript but I did it in ruby

def digital_root(n)
  n_string = n.to_s
  if n_string.length > 1
    sum = n_string.split("").map{ |char| char.to_i}.inject{ |total, n| total + n}
    digital_root(sum)
  else
    n_string.to_i
  end
end
